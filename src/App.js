import HeroHeaderModule from './Modules/HeroHeaderModule';
import FirstSectionTitleContentModule from './Modules/FirstSectionTitleContentModule';
import OffsetContentModule from './Modules/OffsetContentModule';
import SecondSectionTitleContentModule from './Modules/SecondSectionTitleContentModule';
import ImageModule from './Modules/ImageModule';
import ThirdSectionTitleContentModule from './Modules/ThirdSectionTitleContentModule';
import ThreeColumnModule from "./Modules/ThreeColumnModule";
import LogosModule from './Modules/LogosModule';
import FourthSectionTitleContentModule from "./Modules/FourthSectionTitleContentModule";
import FooterModule from "./Modules/FooterModule";
import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <HeroHeaderModule />
      <FirstSectionTitleContentModule />
      <OffsetContentModule />
      <SecondSectionTitleContentModule />
      <ImageModule />
      <ThirdSectionTitleContentModule />
      <ThreeColumnModule />
      <LogosModule />
      <FourthSectionTitleContentModule />
      <FooterModule />
    </div>
  );
}

export default App;
