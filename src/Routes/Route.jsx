import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ComparePrice from "../Pages/ComparePrice/ComparePrice";
import AsideNav from "../Pages/layout/AsideNav";
import OTCmedicine from "../Pages/medicineAll/OTCmedicine";
import Gastric from "../Pages/medicineAll/Gastric";
import Eczema from "../Pages/medicineAll/Eczema";
import Nasal from "../Pages/medicineAll/Nasal";
import ZincDeficiency from "../Pages/medicineAll/ZincDeficiency";
import Spasm from "../Pages/medicineAll/Spasm";
import Diarrhea from "../Pages/medicineAll/Diarrhea";
import Fever from "../Pages/medicineAll/Fever";
import CoughFlu from "../Pages/medicineAll/CoughFlu";
import Ulcer from "../Pages/medicineAll/Ulcer";
import Constipation from "../Pages/medicineAll/Constipation";
import Vitamins from "../Pages/medicineAll/Vitamins";
import Dermatitis from "../Pages/medicineAll/Dermatitis";
import OralFungalInfection from "../Pages/medicineAll/OralFungalInfection";
import Gynecological from "../Pages/medicineAll/Gynecological";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'comparePrice',
                element: <ComparePrice></ComparePrice>
            }

        ]
    },
    {
        path: '/aside',
        element: <AsideNav></AsideNav>,
        children: [
            {
                path: 'otc-medicine',
                element: <OTCmedicine></OTCmedicine>
            },
            {
                path: 'nasal',
                element: <Nasal></Nasal>
            },
            {
                path: 'gastric',
                element: <Gastric></Gastric>
            },
            {
                path: "zinc-deficiency",
                element: <ZincDeficiency></ZincDeficiency>
            },
            {
                path: 'eczema',
                element: <Eczema></Eczema>
            },
            {
                path: "Spasm",
                element: <Spasm></Spasm>
            },
            {
                path: 'cough-flu',
                element: <CoughFlu></CoughFlu>
            },
            {
                path: "diarrhea",
                element: <Diarrhea></Diarrhea>

            },
            {
                path: "fever",
                element: <Fever></Fever>
            },
            {
                path: "ulcer",
                element: <Ulcer></Ulcer>
            },
            {
                path: "constipation",
                element: <Constipation></Constipation>
            },
            {
                path: "vitamins",
                element: <Vitamins></Vitamins>
            },
            {
                path: "dermatitis",
                element: <Dermatitis></Dermatitis>
            },
            {
                path: 'oral-fungal-infection',
                element: <OralFungalInfection></OralFungalInfection>
            },
            {
                path: 'gynecological',
                element: <Gynecological></Gynecological>
            }

        ]
    }



]);