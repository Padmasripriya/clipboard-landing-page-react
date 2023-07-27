import HeroHeaderModule from './Modules/HeroHeaderModule';
import FirstSectionTitleContentModule from './Modules/FirstSectionTitleContentModule';
import SecondSectionTitleContentModule from './Modules/SecondSectionTitleContentModule';
import ImageModule from './Modules/ImageModule';
import ThirdSectionTitleContentModule from './Modules/ThirdSectionTitleContentModule';
import { FourthSectionTitleContentModule } from './Modules/FourthSectionTitleContentModule';
import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <HeroHeaderModule />
      <FirstSectionTitleContentModule />
      <SecondSectionTitleContentModule />
      <ImageModule />
      <ThirdSectionTitleContentModule />
      <FourthSectionTitleContentModule />
    </div>
  );
}

export default App;
