const element = (
  //   Write your code here.

  <div className='super-over-container'>
    <h1 className='super-over-heading'>Super Over League</h1>
    <div className='team-image-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='team-image'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='team-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
