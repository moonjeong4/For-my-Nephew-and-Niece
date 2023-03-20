export default async () => {
  let url = `https://cat-fact.herokuapp.com/facts/random`;
  let data = await (await fetch(url)).json();
  return data.text;
};
