const DG_ENDPOINT = 'wss://api.deepgram.com/v1/listen'
      
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        if (!MediaRecorder.isTypeSupported('audio/webm')) return alert('Browser not supported')
        const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })

        const socket = new WebSocket(DG_ENDPOINT, ['token', '667487b99a348fc493b53dfdfb585f984f88d199'])

        socket.onopen = () => {
          mediaRecorder.addEventListener('dataavailable', async (event) => {
            if (event.data.size > 0 && socket.readyState == 1) {
              socket.send(event.data)
            } 
          })
          mediaRecorder.start(250)
        }

        socket.onmessage = (message) => {
          const data = JSON.parse(message.data)
          console.log(data)

          const { channel, is_final } = data
          const transcript = channel.alternatives[0].transcript

          if (transcript && is_final) {
            document.querySelector('p').textContent += ' ' + transcript
          }
        }
      })