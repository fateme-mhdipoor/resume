import react, {Component} from "react"

const DownIcon = (props) => {
    return (
        <div 
      style = {{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-34px",
        transform: "translateY(-55px)"
      }}
      >
        <div
        style = {{
          maxWidth: "30px"
        }}
        >
      <img src = {props.icon} />
    </div>
    </div>
    )
}
export default DownIcon;