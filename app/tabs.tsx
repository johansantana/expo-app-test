import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Index from './index'
import Sum from './sum'
import Translator from './translator'
import Table from './table'
import Experience from './experience'

const Tab = createBottomTabNavigator()

const iconMap: { [key: string]: keyof typeof Ionicons.glyphMap } = {
  Inicio: 'home',
  Sumadora: 'calculator',
  Traductor: 'language',
  Tabla: 'grid',
  Experiencia: 'star'
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = iconMap[route.name]

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen name="Inicio" component={Index} />
      <Tab.Screen name="Sumadora" component={Sum} />
      <Tab.Screen name="Traductor" component={Translator} />
      <Tab.Screen name="Tabla" component={Table} />
      <Tab.Screen name="Experiencia" component={Experience} />
    </Tab.Navigator>
  )
}
