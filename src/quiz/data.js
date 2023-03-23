import { createContext } from "react";
export const data = createContext([
    {
        question: '2+2',
        answer: 4,
        options: [1,2,3,4]
    },
    {
        question: '3*3',
        answer: 9,
        options: [6,9,33,12]
    },
    {
        question: '2+2+2',
        answer: 6,
        options: [2,4,6,8]
    },
    {
        question: '2+2-2',
        answer: 2,
        options: [2,4,0,22]
    },
    {
        question: '3+3-6',
        answer: 0,
        options: [6,3,1,0]
    },
])
export default data