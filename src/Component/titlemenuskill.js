import react, {Component} from "react";

const TitleMenuSkill = (props) => {
    return (
        <div 
      style = {{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "right",
        marginRight: "145px",
        marginBottom: "-34px",
        transform: "translateY(22px)",
        cursor: "pointer",
        
      }}
      >
        <div
        style = {{
          maxWidth: "30px",
          color:"rgb(169, 80, 228)",
          fontSize: "25px",
        }}
        >
      {props.title}
    </div>
    </div>
    )
}
export default TitleMenuSkill;