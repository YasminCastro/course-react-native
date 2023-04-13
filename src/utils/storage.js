import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorites(key) {
  const favortes = await AsyncStorage.getItem(key);

  return JSON.parse(favortes) || [];
}

export async function saveFavorite(newItem) {
  let myFavorites = await getFavorites("@appreceitas");

  let hasItem = myFavorites.some((item) => item.id === newItem.id);

  if (hasItem) return;

  myFavorites.push(newItem);

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
}

export async function removeFavorite(id) {
  let receipes = await getFavorites("@appreceitas");

  let myFavorites = receipes.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));

  return myFavorites;
}

export async function isFavorite(receipe) {
  let myReceips = await getFavorites("@appreceitas");

  const favorite = myReceips.find((item) => item.id === receipe.id);

  if (favorite) {
    return true;
  }

  return false;
}
