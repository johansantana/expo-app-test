import { Image, Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25
        }}
      >
        Johan Carlos Santana Laucer
      </Text>
      <div
        style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 20
        }}
      >
        <Text>Correo: johancarlosst@gmail.com</Text>
        <Text>Matrícula: 2023-0196</Text>
        <Image
          source={require('@/assets/images/2x2.jpg')}
          style={{ alignSelf: 'center', width: 250, height: 250 }}
        />
      </div>
    </View>
  )
}
