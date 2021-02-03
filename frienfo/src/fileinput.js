import React from "react";
import { parse } from "papaparse";
import Papa from "papaparse";

//Importing images and svg's
import ImportImg from "./importFriendsPic.svg"


const styles = {

    baseContainer: {

        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    header: {

        fontSize: "24px",
    
    },

    content: {

        display: "flex",
        flexDirection: "column",
    },

    imageContainer: {

        width: "21em",
        
    },

    image: {

        width: "100%",
        height: "100%",
    },

    form: {

        marginTop: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    formGroup: {

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "fit-content",
    },

    label: {

        fontSize: "20px",
    },

    input: {

        marginTop: "6px",
        minWidth: "18em",
        height: "37px",
        padding: "0px 10px",
        fontSize: "16px",
        backgroundColor: "gray",
        border: "0",
        borderRadius: "4px",
        marginBottom: "31px",
        transition: "all 250ms ease-in-out",

    },

    footer: {

        marginTop: "1em",
    },

    button: {

        fontSize: "21px",
        padding: "5px 15px",
        border: "0",
        backgroundColor: "rgba(13, 16, 36, 1)",
        color: "white",
        borderRadius: "3px",
        transition: "all 250ms ease-in-out",
    },

    links: {

        textDecoration: "none",
    }

}




class FileReader extends React.Component {

    constructor() {
        super();
        this.state = {
            csvfile: undefined
        };

        this.updateData = this.updateData.bind(this);
    }

    handleChange = event => {

        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {

        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
    };

    updateData(result) {

        var data = result.data;
        console.log(data);
    }

    render() {
        
        console.log(this.state.csvfile);

        return (

            <div className="App" style = {styles.baseContainer}>
                <h2 style = {styles.header}>Import CSV File</h2>
                <div style = {styles.content}>
                    <div style = {styles.imageContainer}>
                        <img src = {ImportImg} style = {styles.image} />
                    </div>
                    <div style = {styles.form}>
                        <div style = {styles.formGroup}>
                            <label style = {styles.label}>Import File</label>
                            <input
                                style = {styles.input}
                                className="csv-input"
                                type="file"
                                ref={input => {
                                    this.filesInput = input;
                                }}
                                name = "file"
                                placeholder={null}
                                onChange={this.handleChange}
                            />
                        </div>

                    </div>





                </div>
                <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                        this.filesInput = input;
                    }}
                    name = "file"
                    placeholder={null}
                    onChange={this.handleChange}
                />
                <p />
                <button onClick={this.importCSV}> Upload Now!</button>
            </div>
        );
    }
}

export default FileReader;