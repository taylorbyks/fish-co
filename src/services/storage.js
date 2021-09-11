import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveTank(tank) {
  try {
    const data = await AsyncStorage.getItem('@fish.co:tanks')
    const oldtanks = data ? JSON.parse(data) : {}

    await AsyncStorage.setItem(
      '@fish.co:tanks',
      [JSON.stringify({
        ...tank,
        ...oldtanks,
      })]
    )
  } catch (error) {
    throw new Error(error)
  }
}

export async function loadTanks() {
  try {
    const data = await AsyncStorage.getItem('@fish.co:tanks')
    const tanks = data ? JSON.parse(data) : {}

    return tanks
  } catch (error) {
    throw new Error(error)
  }
}

export async function removeTank(id) {
  const data = await AsyncStorage.getItem('@fish.co:tanks')
  const tanks = data ? JSON.parse(data) : {}

  delete tanks[id]

  await AsyncStorage.setItem('@fish.co:tanks', JSON.stringify(tanks))
}

export async function saveUser(name) {
  await AsyncStorage.setItem('@fish.co:user', name)
}

export async function loadUser() {
  try {
    const data = await AsyncStorage.getItem('@fish.co:user')

    return data
  } catch (error) {
    throw new Error(error)
  }
}
