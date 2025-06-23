# Project Cv Application with real-time preview TOP

This is a another cv application with real-time preview and better UI based on my previous cv application.

## Features

In this project, state management using useState in the top-level parent component (CvGenerate):

- **All State variables:** (generalInfo, education, experience) are manage within CvGenerate
- **Broken down application - seperated components:** CvGenerate (main parent) - GeneralInfo, education, experience (child) - Input/Textarea (grandChild)
- **Data, funciton pass through props:** The parent pass data and function via props; child components only interact these props and do not manage their own state independently.
- **Types and interfaces:** use for data structures and props TypeScript - increase type safety, maintainability
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development
