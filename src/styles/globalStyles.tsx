import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* fonts */
  @font-face {
  font-family: "digit";
  font-weight: normal;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/fontlab/LABDigital.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/fontlab/LABDigital.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/fontlab/LABDigital.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/fontlab/LABDigital.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/fontlab/LABDigital.ttf")
      format("truetype");
  font-display: swap;
  unicode-range: U+30-39;
}
@font-face {
  font-family: "pret";
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff")
    format("woff");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "pret";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "pret";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
    format("woff");
  font-weight: 800;
  font-style: normal;
}
@font-face {
    font-family: 'dung';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  /* reset css */
  * {
    margin:0;padding:0;border:0;
  }
  html, 
  body {
    width:100%; 
    height:100%;
    background-color: #000;
    color:#fff;
    font-size: 36px; 
    font-family:'digit', 'pret', 'dung', sans-serif;
    font-weight: 400;
  }
  html, 
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  form, 
  fieldset, 
  img {
    margin:0;
    padding:0;
    border:0;
  }
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-family:'digit', 'pret', 'dung', sans-serif;
  }
  article, 
  aside, 
  details, 
  figcaption, 
  figure, 
  footer, 
  header, 
  hgroup, 
  menu, 
  nav, 
  section {
    display:block;
  }

  ul, 
  dl,
  dt,
  dd {
    margin:0;
    padding:0;
    list-style:none;
  }
  legend {
    position:absolute;
    margin:0;
    padding:0;
    font-size:0;
    line-height:0;
    text-indent:-9999em;
    overflow:hidden;
  }
  label, 
  input, 
  button, 
  select, 
  img {
    vertical-align:middle;
    font-size:1em;
  }
  input, 
  button {
    margin:0;
    padding:0;
    font-family:'digit', 'pret', 'dung', sans-serif;
  }
  input[type="submit"] {
    cursor:pointer
  }
  button {
    cursor:pointer
  }
  textarea, 
  select {
    font-family:'digit', 'pret', 'dung', sans-serif;
  }
  select {
    margin:0;
  }
  p {
    margin:0;
    padding:0;
    word-break:break-all;
  }
  hr {
    display:none;
  }
  pre {
    overflow-x:scroll;
    font-size:1.1em;
  }
  a {
    color:#000;
    text-decoration:none;
  }
  a:hover {
    color:#000;
    text-decoration:none;
  }
  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
`;

export default GlobalStyle;
