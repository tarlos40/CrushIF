import Bottom from './components/Bottom'
import Card from './components/Card'
import NavBar from './components/NavBar'

import './styles/main.css'

function App() {

  return (

    <div>

      <NavBar />


      <Card
        isMale={true}
        anonymous={true}
        userName='Anônimo'
        userPhoto='../public/images/RafaelImage.png'
        content={"Hoje eu acordei e me deparei com um ônibus irregular da prefeita mano KKKKKKKKKKKKKKKKKKKKKKKKKKK"}
        nComments={12}
        nLikes={132}
        nShare={150}
      />

      <Card
        isMale={false}
        anonymous={true}
        userName='Anônimo'
        userPhoto='../public/images/RafaelImage.png'
        content={"Hoje eu acordei e me deparei com um ônibus irregular da prefeita mano KKKKKKKKKKKKKKKKKKKKKKKKKKK"}
        nComments={201}
        nLikes={132}
        nShare={92}
      />

      <Card
        isMale={true}
        anonymous={false}
        userName='Carlos'
        userPhoto='../public/images/CarlosImage.png'
        content={"Pedal de Hoje rendeu!!! 23Km"}
        cardPhoto='../public/images/CarlosImage.png'
        nComments={83}
        nLikes={92}
        nShare={19}
      />


      <Card
        isMale={false}
        anonymous={false}
        userName='Rafael'
        userPhoto='../public/images/RafaelImage.png'
        content={"Hoje eu acordei e me deparei com um ônibus irregular da prefeita mano KKKKKKKKKKKKKKKKKKKKKKKKKKK"}
        nComments={193}
        nLikes={12}
        nShare={13}
      />

      <Bottom />
    </div>
  )
}

export default App
