import React from 'react'

function ErrorLine({text}) {
  return (
    <div>
        <p style={styles.error}>{text}</p>
    </div>
  )
}

const styles = {
    error:{
        color:"red"
    }
}

export default ErrorLine