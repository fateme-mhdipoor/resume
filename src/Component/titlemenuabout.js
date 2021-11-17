import react, {Component} from "react"

const TitleMenuAbout = (props) => {
    return (
        <div 
      style = {{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "right",
        marginRight: "65px",
        marginBottom: "-34px",
        transform: "translateY(20px)",
        cursor: "pointer",
      }}
      >
        <div
        style = {{
          maxWidth: "30px",
          color:"rgb(169, 80, 228)",
          fontSize: "25px"
        }}
        >
      {props.title}
    </div>
    </div>
    )
}
export default TitleMenuAbout;