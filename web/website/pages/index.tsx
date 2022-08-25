import type { NextPage } from "next";
import Logo from "./components/logo/Logo";
import YoutubeLink from "./components/youtubeLink/YoutubeLink";
import styled from "styled-components";
import Contact from "./components/contact/Contact";
import MenuIcon from "./components/menuIcon/MenuIcon";
import { useState } from "react";
import Menu from "./components/menu/Menu";

const Home: NextPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuIconClickHandler = () => setIsMenuVisible(!isMenuVisible);

  return (
    <Container>
      <br />

      <HeaderContainer>
        <MenuIcon onClick={menuIconClickHandler} />

        <Logo />
      </HeaderContainer>

      {isMenuVisible && (
        <>
          <Menu /> <br />
        </>
      )}

      {!isMenuVisible && (
        <>
          <br />
          <br />
        </>
      )}

      <Text>
        Emotio - это проект, миссия которого - повысить уровень психического
        здоровья людей в мире на базе КПТ (когнитивно-поведенческой терапии).
      </Text>

      <br />
      <br />

      <CenteredBox>
        <Button href="https://app.emotio.life" target="_blank" rel="noreferrer">
          Зарегистрироваться
        </Button>
      </CenteredBox>

      <Title id="whatIGet">Что я получу?</Title>

      <Text>
        Пользуясь Emotio, ваше мышления будет становится более рациональным,
        адаптивным, функциональным, гибким. <br />
        <br />
        Как результат - вы будете становится все более объективным, спокойный,
        взвешенным, терпеливым, расслабленным. От этого внутреннее состояние
        меняется и заполняется такими эмоциями как счастье, радость,
        исследовательский интерес, любопытство, увлечение, умиротворение и т.д.
      </Text>

      <Title id="howItWork">Как это работает?</Title>

      <Text>
        1. Записать АBC-ситуацию, определив эмоции, мысли и поведение. <br />
        <br />
        2. Вывести АВС паттерн “Я чувствую А, потому что думаю В, эмоции
        спровоцировали действовать меня С”.
        <br />
        <br />
        3. Выявленные мысли/убеждения разобрать в инструменте когнитивной
        реструктуризации.
        <br />
        <br />
        4. Вывести новое, адаптивное поведение.
        <br />
        <br />
        5. Создать домашнее задание чтобы практиковать новые знания и навыки,
        закрепляя их реальными действиями.
      </Text>

      <br />
      <br />

      <YoutubeLink
        text="Что такое ABC протокол"
        href="https://www.youtube.com/watch?v=9ANdGP4__ao"
      />

      <YoutubeLink
        text="Что такое когнитивная реструктуризация"
        href="https://www.youtube.com/watch?v=7tcaiP8ClgI"
      />

      <br />
      <br />

      <Text>
        Этот процесс - фундаментальный. <br />
        <br />
        Проделывая его многократно, психика начнет освобождаться от ненужных
        схем и заученных поведений. Вы начнете видеть шире, воспринимать больше,
        начнет нарабатываться навык гибкого и критического мышления, появится
        адаптивность к ситуациям.
      </Text>

      <Title id="forWhom">Для кого проект?</Title>

      <Text>
        - Люди, которые небыли в психотерапии, но хотели бы попробовать, начав с
        самостоятельной работы; <br />
        <br />- Люди в терапии, которые понимают закономерность мыслей, эмоций,
        поведения, знаю что такое иррациональные убеждения и хотят практиковать
        навыки вне сессии, самостоятельно разбирая ситуации и выводя новое
        поведение.
      </Text>

      <br />
      <br />

      <CenteredBox>
        <Button href="https://app.emotio.life" target="_blank" rel="noreferrer">
          Зарегистрироваться
        </Button>
      </CenteredBox>

      <Title id="contacts">Контакты</Title>

      <Contact
        imgSrc="/founder.png"
        name="Роман Малко"
        description="основатель проекта"
      />

      <br />
      <br />

      <Copyright>Emotio, 2021</Copyright>

      <br />
    </Container>
  );
};

export default Home;

// styled components

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Button = styled.a`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  border-radius: 12px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
`;

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Title = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 40px 0;
`;

const Copyright = styled.p`
  color: #cccccc;
  text-align: center;
`;
