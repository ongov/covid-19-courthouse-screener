import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const LautoIsolement = () => (
  <QuestionTemplate lang="fr" type="tribunaux" yesLink={logic.q3.yes} noLink={logic.q3.no}>
    <h2>
      Un médecin, un professionnel de la santé ou le responsable d'un service de santé publique vous a-t-il demandé de
      vous isoler (rester à la maison) aujourd'hui?
    </h2>
  </QuestionTemplate>
)

export default LautoIsolement
