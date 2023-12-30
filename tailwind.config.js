/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'boxshado': '0px 1px 10px 0px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
       back: "url('/src/assets/blueback.png')",
       whiteback: "url('/src/Assets/whiteback1.png')",
       whiteback2: "url('/src/Assets/whiteback.png')",
       whitebackflip: "url('/src/Assets/whitebackflip.png')",
       house: "url('/src/Assets/house3.PNG')",
     },
     screens: {
      'xs': '0px',
      px3:"300px",
      px4:"400px",
      px5:"500px",
      px6:"600px",
      px7:"700px",
      px8:"800px",
      px9:"900px",
      px10:"1000px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lgs': '1200px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      'bluecol':"#153475FC",
    }
    },
  },
  plugins: [],
}

