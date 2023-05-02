const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = 'It was 94 fahrenheit outside, so <X> went for a walk. When they got to <Y>, they stared in horror for a few moments, then <Z>. Bob saw the whole thing, but was not surprised — <X> weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function getRandomValueFromArray(array){
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateStory() {
  const xItem = getRandomValueFromArray(insertX);
  const yItem = getRandomValueFromArray(insertY);
  const zItem = getRandomValueFromArray(insertZ);

  let newStory = storyText.replaceAll('<X>', xItem).replaceAll('<Y>', yItem).replaceAll('<Z>', zItem);
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }
  if (document.getElementById("uk").checked) {
    const weightInStone = Math.round(300 * 0.0714286);
    const temperatureInCentigrade = Math.round((94 - 32) * 5 / 9);
    newStory = newStory.replaceAll('94 fahrenheit', `${temperatureInCentigrade} centigrade`);
    newStory = newStory.replaceAll('300 pounds', `${weightInStone} stone`);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', generateStory);
