const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const initialNoBtnPosition = {
  left: noBtn.style.left,
  top: noBtn.style.top,
};

yesBtn.addEventListener("click", () => {
  question.innerHTML = "okaayy yeayyy🖤";
  gif.src =
    "https://cdn.discordapp.com/attachments/429489073300963339/1205799318494126171/a4b29dda-42a8-4de1-b5cd-886ab9f91665.png?ex=65d9af20&is=65c73a20&hm=bcea5d2b2f20223ecb8c1e87af65f5ff55f08181eff6ad1291998a729b55433d&";
  gif.style.width = "300px";
  gif.style.height = "auto";
  noBtn.style.left = initialNoBtnPosition.left;
  noBtn.style.top = initialNoBtnPosition.top;
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
