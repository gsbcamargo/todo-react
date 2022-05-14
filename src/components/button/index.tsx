import React from "react";

const Button = () => {
  const active = false;
  const styles = {
    backgroundColor: active ? 'green' : 'yellow'
  }
  return (
    <button style={styles}>
      Botão
    </button>
  )
}

export default Button;