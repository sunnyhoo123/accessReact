import React, { useState, useCallback, useEffect } from "react";
import { Tag } from "antd";
import styles from "./index.less";

const outer = {
  background: "#F6F6F6",
  minHeight: "100vh",
  width: "400px",
};

const CusTable = (props) => {
  return (
    <div style={outer}>
      <div className={styles.tableContent}>
        <table>
          <thead>
            <tr>
              <th className={styles.thCheckBox}>
                <div>
                  <input type="checkbox"></input>
                </div>
              </th>
              <th>id</th>
              <th>
                <span>age</span>
              </th>
              <th>
                <span>email</span>
              </th>
              <th>
                <span>name</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={styles.thCheckBox}>
                <div>
                  <input type="checkbox"></input>
                </div>
              </th>
              <th>8954632622777958410</th>
              <th>
                <span>29</span>
              </th>
              <th>
                <span>yunstore@snapmail.cc</span>
              </th>
              <th>
                <span>yun</span>
              </th>
            </tr>
            <tr>
              <th className={styles.thCheckBox}>
                <div>
                  <input type="checkbox"></input>
                </div>
              </th>
              <th>8954632622777958412</th>
              <th>
                <span>23</span>
              </th>
              <th>
                <span>tom26@michaels.com</span>
              </th>
              <th>
                <span>tom</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CusTable;
