//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";
import React from "react";
import axios from "axios";
import $ from "jquery";
var defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#be3a2b";
defaultThemeColors["$main-hover-color"] = "#6fe06f";
// defaultThemeColors["$text-color"] = "#4a4a4a";
// defaultThemeColors["$header-color"] = "#7ff07f";

// defaultThemeColors["$header-background-color"] = "#4a4a4a";
// defaultThemeColors["$body-container-background-color"] = "#f8f8f8";
Survey.StylesManager.applyTheme("modern");
const TOKEN =
  "pk.eyJ1IjoicWFudGlwYXMiLCJhIjoiY2s4MWluZnBiMGZ1NDNobXMxc3hxZGl1aSJ9.KOxjAfRlBi5O-Qtojbdavw";
// function getAdress(query) {
//   console.log("query: ", query);
//   axios
//     .get(
//       "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//         query +
//         ".json?access_token=" +
//         TOKEN
//     )
//     .then(response => {
//       console.log("data:", response.data);
//     });
// }
function getAdress(params) {
  if (params.length < 2) return;
  var country = params[0];
  var capitalQuestionName = params[1];
  var currencyQuestionName = params.length > 2 ? params[2] : null;
  var survey = this.survey;
  if (!country || !country.length) {
    survey.clearValue(capitalQuestionName);
    if (!!currencyQuestionName) {
      survey.clearValue(currencyQuestionName);
    }
    return;
  }
  survey.setVariable("request_processing", true);
  survey.setVariable("request_error", null);
  country = country.toLowerCase();
  $.ajax({
    url:
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      country +
      ".json?access_token=" +
      TOKEN,
    type: "GET",
    success: function(data) {
      if (!data || data.length < 1) return;
      var countryValue = data[0];
      survey.setValue(capitalQuestionName, countryValue);
      survey.setVariable("myChoices", [1, 2, 3]);
      survey.setVariable("request_processing", false);
      console.log(data);
    },
    error: function(xhr, ajaxOptions, thrownError) {
      survey.setVariable("request_error", "The country is not found.");
      survey.setVariable("request_processing", false);
      survey.clearValue(capitalQuestionName);
      if (!!currencyQuestionName) {
        survey.clearValue(currencyQuestionName);
      }
    }
  });
}
Survey.FunctionFactory.Instance.register("getAdress", getAdress);

export default function SignUpSurvey(props) {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Super, gib hier euer Business-Namen ein.",
            isRequired: true
          },
          {
            type: "text",
            name: "email",
            title: "Und hier eure E-Mail, damit wir euch erreichen können.",
            isRequired: true,
            placeHolder: "beispiel@mail.de"
          },
          {
            type: "dropdown",
            name: "branch",
            title: "In welcher Branche ist euer Business?",
            description:
              'Wenn deine nicht dabei ist, einfach "Sonstige" wählen.',
            isRequired: true,
            choices: [
              {
                value: "item1",
                text: "Gastronomie"
              },
              {
                value: "item2",
                text: "Service & Reparaturen"
              },
              {
                value: "item3",
                text: "Einzelhandel"
              },
              {
                value: "item4",
                text: "Sonstige"
              }
            ]
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "comment",
            name: "sortiment",
            title: "Was verkauft ihr? ",
            description: "Kurz und knackig.",
            maxLength: 300
          },
          {
            type: "comment",
            name: "usage",
            title: "Wie können die Supporter euch nutzen?",
            description: "z.B. über Lieferdienste, Telefonshopping",
            isRequired: true
          }
        ]
      },
      {
        name: "page3",
        elements: [
          {
            type: "text",
            name: "homepage",
            title: "Gebt hier eure Webseite ein.",
            placeHolder: "https://"
          },
          {
            type: "text",
            name: "phone",
            title: "Über welche Telefonummer erreichen euch die Supporter? ",
            isRequired: true,
            inputType: "tel"
          },
          {
            type: "comment",
            name: "comment",
            title: "In welchem Zeitraum können die Supporter euch erreichen?"
          }
        ]
      },
      {
        name: "page4",
        elements: [
          {
            type: "file",
            name: "picture",
            title:
              "Ein Foto von deinem Business als Abschluss und du hast es geschafft! ",
            description: "Kein muss. ",
            maxSize: 0
          },
          {
            type: "boolean",
            name: "confirm",
            title:
              "Seid ihr damit einverstanden, dass SupportYourLocalsMap eure angegebenen Informationen veröffentlicht?  ",
            isRequired: true,
            labelTrue: "Yes",
            labelFalse: "No"
          }
        ]
      }
    ]
  };

  //Define a callback methods on survey complete
  const onComplete = (survey, options) => {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    props.setResult(survey.data);
  };
  var model = new Survey.Model(json);
  return (
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    <Survey.Survey model={model} onComplete={onComplete} />
    /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function.
    //If needed react Survey Component will change its behavior and change UI.
  );
}
