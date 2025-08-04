const Notification = ({ notification }) => {
  if (!notification) {
    return null
  }

  const style = {
    border: 'solid',
    borderColor: '#61a137ff',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#f0fff2ff',
    color: '#333'
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification