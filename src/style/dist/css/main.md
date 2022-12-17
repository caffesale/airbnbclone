/**
 * Basic typography style for copy text
 */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role=list],
ol[role=list] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  -webkit-text-decoration-skip: ink;
          text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
*::before,
*::after {
    -webkit-animation-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
    -webkit-animation-iteration-count: 1 !important;
            animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.header {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.nav {
  margin: 10px 5px;
  text-align: center;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__item {
  display: inline-block;
  margin: 0 5px;
}

.nav__item {
  display: inline-block;
  margin: 0 5px;
  padding: 4px;
}

.intro-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.intro-movie {
  position: absolute;
  overflow: hidden;
  left: 0%;
  width: 50%;
  height: 100%;
}

.intro-logo {
  position: absolute;
  color: white;
  margin: 30px;
  cursor: pointer;
}

.intro-content {
  position: absolute;
  left: 50%;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  background-color: #000000;
}

.intro-rightheader {
  padding: 2rem 2.5rem 0 2.5rem;
}

.intro-button {
  width: 5rem;
  height: 2rem;
  color: #fff;
  background-color: #222222;
  border-radius: 0.75rem;
}

.intro-text {
  margin: 30vh;
  color: #fff;
  width: 50%;
}

.intro-texttitle {
  font-size: 2rem;
  font-weight: 700;
}

.regi-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.regi-left {
  width: 50%;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  display: flex;
  align-items: unset;
  justify-content: center;
  flex-direction: column;
}

.regi-rightheader {
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  left: 50%;
  z-index: 2;
}
.regi-rightheader-container {
  padding: 32px 48px 0px;
  justify-content: flex-end;
  background-color: #fff;
  height: 88px;
  display: flex;
}

.regi-rightcontent {
  width: 50%;
  overflow-y: auto;
  border-radius: 0px;
  position: inherit;
  height: 100%;
  z-index: 0;
  min-height: unset;
  max-height: unset;
  margin-left: 50vw;
  flex: 1 1 50%;
  align-self: flex-end;
  display: flex;
  background-color: #fff;
  color: #222222;
}

.regi-rightcontentcontainer {
  overflow-y: auto;
  margin-top: 88px;
  padding-left: 48px;
  padding-right: 48px;
  border-top: 1px solid #fff;
  margin-bottom: 82px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
}

.regi-rightbtncontainer {
  padding-top: 1rem;
  width: 100%;
  max-width: 464px;
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
}

.regi-rightbtn {
  min-height: 88px;
  background-color: #fff;
  /* border: 1px solid #808080; */
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  padding: 0;
}
.regi-rightbtn:hover {
  border: 1px solid #222222;
}

.regi-countcontainer {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.regi-countflex {
  display: flex;
}

.btn {
  display: inline-block;
  padding: 0.75 2.5rem;
  border-radius: 0.45rem;
  letter-spacing: 0.2rem;
  text-decoration: none;
  background-color: bisque;
  cursor: pointer;
}

.form {
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form__btn {
  margin: 8px;
}
.form__file-container {
  margin: 5px;
  padding: 5px;
}

.card__description {
  position: relative;
}

.card__heart {
  font-size: 1.25rem;
  position: absolute;
  top: 5px;
  left: 325px;
}

.star {
  position: absolute;
  top: 2px;
  left: 300px;
}

.description-container {
  width: 100%;
}

.star-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: right;
}
