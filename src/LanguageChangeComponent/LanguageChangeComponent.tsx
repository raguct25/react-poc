import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
function LanguageChangeComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const language = [
    {
      name: "English",
      country_code: "en",
    },
    {
      name: "German",
      country_code: "de",
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
        <div className="select-box">
          <select onChange={changeLanguage}>
            {language.map((item: any) => (
              <option key={item.country_code} value={item.country_code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        To get started, edit <code>src/App.js</code> and save to reload.
        <MyComponent />
        <div className="select-box">{t("description.part2")}</div>
      </div>
    </div>
  );
}

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    console.log("this.props", this.props);
    const { t }: any = this.props;
    return <h2>{t("title", { passtext: "THIS is A Passing TEXT" })}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      If doesn't exist property describtion and part1 . I am will appeared
      Fallback text.
    </Trans>
  );
}

export default React.memo(LanguageChangeComponent);

// "part1": "To get started, edit <1>src/App.js</1> and save to reload.",
