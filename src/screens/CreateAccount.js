import React from 'react';
import { SvgCss } from 'react-native-svg';
import { Dimensions } from 'react-native';

const markerRendering =`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 412 732">
        <defs>
            <style>.cls-1{fill:#ffae48;}.cls-1,
                .cls-2,.cls-3{stroke:#000;stroke-miterlimit:10;}
                .cls-2{fill:#57bde7;}.cls-3{fill:#4b515b;}
            </style>
        </defs>
            <path class="cls-1" d="M6.85,243.5c2.57,0,5.11-.18,7.66-.44,1.36-.15,2.71-.33,4.07-.55l1.08-.18.23,0,.11,0c.62-.7,4.2-.77,5-1,3.37-1,5.28-1.71,8.62-2.88,7-2.44,12.44-6.07,19.24-9.24q5-2.34,10-5,2.54-1.36,5-2.79l.29-.17.25-.15,1-.59c.83-.49,1.65-1,2.48-1.5a182.4,182.4,0,0,0,18.7-13.27c3-2.44,6-5,8.86-7.71,1.56-1.45,3.1-2.93,4.62-4.46.65-.66,1.3-1.32,1.94-2l1.07-1.12.05,0a178.15,178.15,0,0,0,15.79-19.71q3.68-5.31,7-11c.34-.59.69-1.18,1-1.78l.15-.25.1-.23c.47-1,1-1.94,1.55-2.9,1.33-2.46,2.68-4.91,4-7.33,8.75-15.59,18.52-29.64,29.9-41.62C179,92.62,192.57,82.62,207.46,77c14.54-5.5,29.66-7.3,44.62-9.07,7.11-.84,14.23-1.68,21.31-3l1-.19,1.65-.33,2.2-.48c1.83-.41,3.66-.87,5.47-1.36a100.4,100.4,0,0,0,10.56-3.5,87.17,87.17,0,0,0,10.36-4.89c.07,0,1.75-1,.63-.36.44-.26.88-.52,1.31-.79l2.34-1.5q2.61-1.76,5.13-3.72c1.54-1.2,3.06-2.46,4.54-3.79.55-.51,1.1-1,1.64-1.56.26-.25,1-1,1.11-1.13a81.42,81.42,0,0,0,6.34-8q1.62-2.33,3.14-4.78c.52-.83,1-1.66,1.52-2.51.2-.33.4-.68.59-1l.48-.83c.17-.3.42-.78.47-.87l.72-1.33c.48-.91.94-1.82,1.41-2.73q1.26-2.5,2.45-5.07,2.16-4.65,4.15-9.47c.71-1.71-.37-3.69-2-3.69H2.22A2.43,2.43,0,0,0,0,3.62V240.87a2.44,2.44,0,0,0,2.18,2.59C3.73,243.5,5.29,243.52,6.85,243.5Z"/><path class="cls-2" d="M254.1,392.53c6.8,8.32,11.83,18.14,16.86,27.89,2.32,4.5,4.67,9,7.28,13.27.67,1.1,1.36,2.17,2.05,3.24q.66,1-.09-.15l.57.8c.29.4.57.8.86,1.19q2,2.79,4.19,5.46a158.11,158.11,0,0,0,16.8,17.66c.42.38.83.75,1.26,1.12l.48.42,1.91,1.64q2.33,1.95,4.7,3.81,5,3.93,10.17,7.49a214.31,214.31,0,0,0,21.09,12.77c1.9,1,3.82,2,5.76,3,.44.22.88.45,1.33.66-1.5-.66,0,0,.29.13.74.36,1.48.7,2.23,1.05q5.54,2.55,11.19,4.8A208.18,208.18,0,0,0,384.71,506c7.88,2.15,15.66,4.6,23.48,7h0a2.32,2.32,0,0,0,2.78-2.5V198.67c0-2.14-2.09-3.35-3.56-2.07-11.26,9.83-23.63,18.16-35.85,26.05-22.1,14.27-44.42,28.08-63.39,47.64a153.78,153.78,0,0,0-25.9,34.83c-6.09,11.49-10,23.27-14.12,35.55-5.34,16-10.1,32.29-15.31,48.36a2.9,2.9,0,0,0,.72,3A6.51,6.51,0,0,1,254.1,392.53Z"/><path class="cls-3" d="M18.53,448.69a207.91,207.91,0,0,0,27.08,24c20.52,15.59,42.6,30.34,66.52,37.45a87.86,87.86,0,0,0,17.79,3.53c5.1.41,24-.27,28.29-1.93,9.42-3.65,2.57.4,19.4-8.29,23.11-12,18.7-11.2,28-19.24,3.58-3.11,7.6-9.83,11-13.85q2.76-3.27,5.33-6.75c1.49-2,2.91-4.06,4-5.72,12.11-18.77,19.85-40,26.68-61.47,7.24-22.79,13.57-46,22.15-68.16,10.32-26.68,27.9-47.64,47.95-64.87,18.33-15.74,38.82-27.29,58.27-41,10.33-7.27,20.43-15.28,29.21-24.78a2.79,2.79,0,0,0,.7-1.89V3.6A2.42,2.42,0,0,0,408.64,1h-64a2.21,2.21,0,0,0-2,1.42q-1.51,3.44-3.13,6.81c-6,12.44-13.23,24.84-22.88,33.83-23.16,21.57-53.77,23.28-82,26.3-3.48.36-7,.77-10.44,1.25-1,.14-2,.28-3,.44l-.25,0-1.33.22c-1.68.29-3.37.61-5,.94a109.74,109.74,0,0,0-20.67,6.26c-.95.4-1.89.82-2.82,1.25l-.75.35-.92.46c-1.54.79-3.06,1.62-4.57,2.51a114.64,114.64,0,0,0-9.8,6.63q-4.47,3.32-8.71,7c-.09.08-1.43,1.3-.45.4l-.81.74q-1,.91-2,1.86c-1.29,1.25-2.57,2.53-3.82,3.83A161.63,161.63,0,0,0,145.55,120c-1.16,1.62-2.32,3.26-3.46,4.92s-1.92,2.81-2.54,3.76c-2.4,3.65-4.68,7.38-7.19,10.91A155.72,155.72,0,0,1,101.19,172c-22.6,17.64-51.22,29.7-77.65,36.63a.61.61,0,0,0-.12.16,103.22,103.22,0,0,1-18,1.66l-3,0A2.41,2.41,0,0,0,.15,213V425.87a2.83,2.83,0,0,0,.57,1.73C6.37,434.94,12.29,442,18.53,448.69Z"/>           
    </svg>`;

export default function CreateAccount() {
    const { width, height } = Dimensions.get('screen');
    console.log(width, height)

    return (
        <SvgCss width={width} height={height} xml={markerRendering} />
    );
}
