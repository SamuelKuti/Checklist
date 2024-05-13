# How to add react icons
1. Run "npm i --save @fortawesome/fontawesome-svg-core"
2. Run "npm i --save @fortawesome/free-solid-svg-icons"
3. Run "npm i --save @fortawesome/react-fontawesome@latest"

# Next find an icon to use from https://fontawesome.com/search
4. Click on the icon
5. Click on the "React" tab
6. Copy the link eg: "<FontAwesomeIcon icon="fa-solid fa-plus" />"

# Go Back to your code where you want to implement the icon
7. Import font awesome: "import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";"
8. Import the icon eg: "import { faPlus } from "@fortawesome/free-solid-svg-icons";"
9. Use the icon eg: "<FontAwesomeIcon icon={faPlus} />"

