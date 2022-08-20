import React from "react";
import { Parallax } from "react-parallax";
import "./Home.css";
import TypewriterText from "./TypewriterText";
import image1 from "../resources/images/animal.jpg";

const image =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const inlineStyle = {};

const Home = () => {
  return (
    <div>
      <Parallax
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: `rgba(0, 0, 0, ${percentage * 0.5})`,
            }}
          />
        )}
        bgImage={image1}
        strength={200}
        blur={{ min: -4, max: 5 }}
      >
        <div style={{ height: 500 }}>
          <TypewriterText />
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}>
        <div id="about">
          <h1 style={{ color: "grey", fontWeight: "bold" }}>About me</h1>
          <p>
            I love building cool things. I'm a software engineer , with a keen
            interest in Object oriented programming, functional programming and
            devOps. Keep scrolling and have a look at what I've worked with,
            what i'm working with and what i want to work with one day.{" "}
          </p>
        </div>

        <div id="techstacks">
          <h1 style={{ color: "grey", fontWeight: "bold" }}>
            Technologies and Tools
          </h1>
          <p>
            I love learning and working with new tech and improving on tech I'm
            always working with.
          </p>
          <h2 style={{ color: "grey", fontWeight: "bold" }}>Programming :</h2>
          <img
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++"
          />
          <img
            src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white "
            alt="C#"
          />
          <img
            src=" https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS#"
          />
          <img
            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white "
            alt="HTML%"
          />
          <img
            src=" https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white "
            alt="JAVA"
          />
          <img
            src=" https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E "
            alt="JS"
          />
          <img
            src=" https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white "
            alt="PHP"
          />
          <img
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white  "
            alt="TS"
          />

          <img
            src=" https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql "
            alt="GraphQL"
          />
          <img
            src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white  "
            alt="bootstrap"
          />
          <img
            src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white "
            alt="chakra"
          />
          <img
            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB  "
            alt="express"
          />
          <img
            src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
            alt="jwt"
          />
          <img
            src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
            alt="jquery"
          />
          <img
            src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white "
            alt="laravel"
          />
          <img
            src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white  "
            alt="npm"
          />
          <img
            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white  "
            alt="node"
          />
          <img
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="react"
          />
          <img
            src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white  "
            alt="react-router"
          />
          <img
            src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white "
            alt="redux"
          />
          <img
            src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white "
            alt="strapi"
          />
          <img
            src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white "
            alt="yarn"
          />

          <img
            src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white  "
            alt="figma"
          />
          <img
            src="https://img.shields.io/badge/Proto.io-161637?style=for-the-badge&logo=proto.io&logoColor=00e5ff "
            alt="proto.io"
          />
          <img
            src=" https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white "
            alt=" "
          />
          <img
            src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white "
            alt="postman"
          />

          <h2 style={{ color: "grey", fontWeight: "bold" }}>Databases</h2>
          <img
            src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase  "
            alt="FIREBASE"
          />
          <img
            src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white "
            alt="AWS DynamoDB"
          />
          <img
            src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white "
            alt="MySQL"
          />

          <h2 style={{ color: "grey", fontWeight: "bold" }}>
            DevOps and CI/CD
          </h2>
          <img
            src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white "
            alt="AWS"
          />

          <img
            src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white"
            alt="AZURE"
          />

          <img
            src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white "
            alt="ESLint"
          />
          <img
            src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white "
            alt="Docker"
          />

          <img
            src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white  "
            alt="NGINX"
          />

          <img
            src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7  "
            alt="NETLIFY"
          />

          <h2 style={{ color: "grey", fontWeight: "bold" }}>UI Libraries</h2>

          <img
            src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white  "
            alt="Styled components"
          />

          <img
            src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white "
            alt="MUI"
          />
          <img
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="Tailwind CSS"
          />

          <img
            src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white "
            alt="sass"
          />
          <img
            src="https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white "
            alt="ant design"
          />
          <h2 style={{ color: "grey", fontWeight: "bold" }}>Site Builders</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
