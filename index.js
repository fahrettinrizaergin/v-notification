import './assets/css/app.css';

function vRender() {
  const body = document.querySelector('body')
  const container = document.createElement('div')
  container.classList.add('v-notification-container')

  const topRight = document.createElement('div')
  topRight.classList.add('top-right')
  topRight.setAttribute('id', 'top-right')
  topRight.setAttribute('data-position', 'top-right')
  container.appendChild(topRight)

  const topCenter = document.createElement('div')
  topCenter.classList.add('top-center')
  topCenter.setAttribute('id', 'top-center')
  topCenter.setAttribute('data-position', 'top-center')
  container.appendChild(topCenter)

  const topLeft = document.createElement('div')
  topLeft.classList.add('top-left')
  topLeft.setAttribute('id', 'top-left')
  topLeft.setAttribute('data-position', 'top-left')
  container.appendChild(topLeft)

  const center = document.createElement('div')
  center.classList.add('center')
  center.setAttribute('id', 'center')
  center.setAttribute('data-position', 'center')
  container.appendChild(center)

  const bottomLeft = document.createElement('div')
  bottomLeft.classList.add('bottom-left')
  bottomLeft.setAttribute('id', 'bottom-left')
  bottomLeft.setAttribute('data-position', 'bottom-left')
  container.appendChild(bottomLeft)

  const bottomCenter = document.createElement('div')
  bottomCenter.classList.add('bottom-center')
  bottomCenter.setAttribute('id', 'bottom-center')
  bottomCenter.setAttribute('data-position', 'bottom-center')
  container.appendChild(bottomCenter)

  const bottomRight = document.createElement('div')
  bottomRight.classList.add('bottom-right')
  bottomRight.setAttribute('id', 'bottom-right')
  bottomRight.setAttribute('data-position', 'bottom-right')
  container.appendChild(bottomRight)
  body.insertBefore(container, body.firstChild)
  console.log('----- NOTIFICATION CONTAINER RENDER -----')
}

function alertDiv(className, params) {
  const timeOut = params.timeout !== undefined ? params.timeout * 1000 : 5 * 1000
  const date = new Date
  const randID = Math.random().toString().substring(2)
  const alertDiv = document.createElement('div')
  const alertContainerDiv = document.createElement('div')
  alertContainerDiv.classList.add('v-alert-container')
  alertDiv.classList.add('v-alert', className)
  alertDiv.id = `v-${randID}-${date.getSeconds()}`
  if (params.title) {
    const bold = document.createElement('b')
    const alertTitle = document.createElement('div')
    alertTitle.classList.add('v-alert-title')
    bold.innerText = `${params.title ? params.title : ''}`
    alertTitle.appendChild(bold)
    alertContainerDiv.appendChild(alertTitle)
  }
  if (params.message) {
    const alertMessage = document.createElement('div')
    alertMessage.classList.add('v-alert-message')
    params.messageType === 'html' ? alertMessage.innerHTML = `${params.message ? params.message : ''}` : alertMessage.innerText = `${params.message ? params.message : ''}`
    alertContainerDiv.appendChild(alertMessage)
  }
  alertDiv.appendChild(alertContainerDiv)
  const closeButton = document.createElement('button')
  closeButton.classList.add('v-alert-close')
  closeButton.innerHTML = '&times;'
  closeButton.addEventListener('click', () => {
    alertDiv.remove()
  })
  setTimeout(() => {
    alertDiv.remove()
  }, timeOut)
  alertDiv.appendChild(closeButton)
  document.querySelector(`.v-notification-container > *[data-position="${params.position ? params.position : 'top-right'}"]`).appendChild(alertDiv)
}

function success(params) {
  alertDiv('v-alert-success', params)
}

function danger(params) {
  alertDiv('v-alert-danger', params)
}

function warning(params) {
  alertDiv('v-alert-warning', params)
}

function info(params) {
  alertDiv('v-alert-info', params)
}

function light(params) {
  alertDiv('v-alert-light', params)
}

function primary(params) {
  alertDiv('v-alert-primary', params)
}

export { vRender, success, danger, warning, info, light, primary }
