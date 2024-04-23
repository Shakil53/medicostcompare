import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ComparePrice from "../Pages/ComparePrice/ComparePrice";
import AsideNav from "../Pages/layout/AsideNav";
import OTCmedicine from "../Pages/medicineAll/OTCmedicine";
import WomenChoice from "../Pages/medicineAll/WomenChoice";
import SexualWellness from "../Pages/medicineAll/SexualWellness";
import DiabeticCare from "../Pages/medicineAll/DiabeticCare";
import BabyCare from "../Pages/medicineAll/BabyCare";
import DentalCare from "../Pages/medicineAll/DentalCare";
import PersonalCare from "../Pages/medicineAll/PersonalCare";
import Devices from "../Pages/medicineAll/Devices";
import PrescriptionMedicine from "../Pages/medicineAll/PrescriptionMedicine";





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
                path: 'women-choice',
                element: <WomenChoice></WomenChoice>
            },
            {
                path: 'sexual-wellness',
                element: <SexualWellness></SexualWellness>
            },
            {
                path: "diabetic-care",
                element: <DiabeticCare></DiabeticCare>
            },
            {
                path: 'baby-care',
                element: <BabyCare></BabyCare>
            },
            {
                path: "dental-care",
                element: <DentalCare></DentalCare>
            },
            {
                path: 'personal-care',
                element: <PersonalCare></PersonalCare>
            },
            {
                path: "devices",
                element: <Devices></Devices>

            },
            {
                path: "prescription-medicine",
                element: <PrescriptionMedicine></PrescriptionMedicine>
            }

        ]
    }



]);