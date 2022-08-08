import React from "react";
import config from "../../../config";
import "./ShemaScreen.css";

const ShemaScreen = ({ bp }) => {
  const setText = () => {
    let res = [];
    for (let i = 0; i < config.h; ++i) {
      res[i] = [];
      for (let j = 0; j < config.w; ++j) {
        res[i].push(0);
      }
    }
    for (let i = 0; i < bp.length; ++i) {
      res[bp[i].y][bp[i].x] = 1;
    }
    // let str = [];
    // for (let i = 0; i < res.length; ++i) {
    //   str.push(res[i].join(""));
    // }
    // console.log(str);
    return res;
  };

  return (
    <div className="ss">
      <table>
        <tbody>
          {setText().map((row, i) => {
            return (
              <tr key={i + "tr"}>
                {row.map((cell, j) => {
                  return (
                    <td
                      key={`td${i}_${j}`}
                      className={cell ? "color" : "tp"}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShemaScreen;
