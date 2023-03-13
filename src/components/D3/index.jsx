/* eslint-disable */
import React, { Component } from "react";
import * as d3 from "d3";
import backgroundImg from "@assets/images/drawImage.svg";
import { nodeData } from "./mock";
import { style } from "d3";
import styles from "./index.less";

const width = 900;
const height = 400;

class DThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleLimit: [1 / 2, 8],
      nodes: nodeData.nodes,
      links: nodeData.links,
      showTip: false,
    };
  }

  componentDidMount() {
    this.initSvg();
    this.initData();
  }

  initData = () => {
    const { nodes, links, scaleLimit } = this.state;
    const srcNode = nodes[0];
    // 计算节点坐标
    const _node = this.convert(srcNode, links);
    // 设置画布
    this.svg.selectAll("*").remove();
    this.g = this.svg.append("g").attr("id", "graphImg");
    // 设定缩放范围
    this.zoomedFunc = d3.zoom().scaleExtent(scaleLimit).on("zoom", this.zoomed);
    this.svg.call(this.zoomedFunc);
    this.getLinks(nodes, srcNode);
    // 画线
    this.drawLinks(this.g, links);
    // 画点
    this.drawNodes(this.g, _node);
  };
  initSvg = () => {
    const svg = d3
      .select("#drawSVG") //选择容器
      .append("svg") //将svg放入容器里面
      .attr("width", width) //设置svg的宽度
      .attr("height", height) //设置svg的高度
      .attr("viewBox", `0 20 ${width} ${height}`); //设置缩放
    // .attr('class', 'svgImg')
    // .style("background-color", "red")    //设置svg的背景颜色
    // .style("border-radius", "50%")   //设置svg的圆角
    // .attr("id", "graphSvg");
    // .attr("transform", "translate(0,0)");
    this.svg = svg;
    this.g = this.svg.append("g").attr("id", "graphSvg");
  };
  // 缩放
  zoomed = (e) => {
    // const transform = d3.event.transform;
    // 项目中的版本为"^5.14.2"，可以用d3.event, 而当前版本为："^6.1.1"，d3.event提示为null,查找很多资料后发现可以使用回调中的事件
    this.g.attr("transform", e.transform);
  };
  convert = (srcNode, links) => {
    const { nodes } = this.state;
    const _width = 110;
    const _height = 81;
    const convertNodes = [];
    const map = new Map();
    srcNode["x"] = width / 2 - 100;
    srcNode["y"] = height / 2;

    // 上、中、下级个数
    const supSize = links.filter((i) => i.type === "superior").length;
    const equSize = links.filter((i) => i.type === "equal").length;
    const subSize = links.filter((i) => i.type === "subordinate").length;
    const dip = equSize < 3 ? 1 : 2;
    // 上、中、下级起始坐标
    let supStart = -(supSize - 1) * _width;
    let equStart = -(equSize - dip) * _width * 2;
    let subStart = -(subSize - 1) * _width;
    map.set(srcNode.candidateId, srcNode);
    const { x, y } = srcNode;
    let equCount = 0;
    links.forEach((i) => {
      if (i.type === "superior") {
        map.set(i.targetId, {
          x: x + supStart,
          y: y - _height * 1.5,
          type: i.type,
          location: "",
        });
        supStart += _width * 2;
      }
      if (i.type === "equal") {
        equCount++;
        if (equCount <= equSize / 2) {
          map.set(i.targetId, {
            x: x + equStart,
            y,
            type: i.type,
            location: "left",
          });
          equStart += _width * 2;
        } else {
          map.set(i.targetId, {
            x: x + equStart + 2 * _width,
            y,
            type: i.type,
            location: "right",
          });
          equStart += _width * 2;
        }
      }
      if (i.type === "subordinate") {
        map.set(i.targetId, {
          x: x + subStart,
          y: y + _height * 1.5,
          type: i.type,
          location: "",
        });
        subStart += _width * 2;
      }
    });
    nodes.forEach((i) => {
      const m = map.get(i.candidateId);
      if (m) {
        i["x"] = m.x || i.x;
        i["y"] = m.y || i.y;
        i["type"] = m.type;
        i["location"] = m.location;
        convertNodes.push(i);
      }
    });
    return convertNodes;
  };
  getLinks = (relations, srcNode) => {
    const links = [];
    for (const item of relations) {
      links.push({
        sourceId: srcNode.candidateId,
        targetId: item.candidateId,
        type: item.type,
      });
    }
    this.setState({
      links,
    });
    return links;
  };
  drawNodes = (svg, nodes) => {
    nodes.forEach((n) => {
      this.drawNode(svg, n);
    });
  };
  drawNode = (svg, node) => {
    // const srcNode = this.state.nodes[0];
    const _node = svg
      .selectAll(`.node-${node.candidateId}`)
      .data([node])
      .enter()
      .append("g")
      .attr("class", `.node-${node.candidateId}`)
      .attr("transform", (d) => {
        return `translate(${d.x},${d.y})`;
      });
    // const curWidth = node.candidateId === srcNode.candidateId ? 225 : 188;
    // const curHeight = node.candidateId === srcNode.candidateId ? 117 : 81;
    // const curNodeX = node.candidateId === srcNode.candidateId ? -18 : 0;
    // const curNodey = node.candidateId === srcNode.candidateId ? -12 : 0;
    const curWidth = 225;
    const curHeight = 117;
    const curNodeX = -18;
    const curNodey = -12;
    // 方形节点
    const currentNode = _node
      .append("svg:image")
      .attr("width", curWidth)
      .attr("height", curHeight)
      .attr("x", curNodeX)
      .attr("y", curNodey)
      .attr("xlink:href", backgroundImg);
    _node
      .append("rect")
      .attr("id", (d) => {
        return `rect${d.candidateId}`;
      })
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", 10)
      .attr("y", 20)
      .attr("rx", 20);
    _node
      .append("circle")
      .attr("fill", "none")
      .attr("cx", 30)
      .attr("cy", 42)
      .attr("stroke-width", 1)
      .attr("stroke", "#FFF")
      .attr("r", 20);
    _node
      .append("clipPath")
      .attr("id", (d) => {
        return `clip${d.candidateId}`;
      })
      .append("use")
      .attr("xlink:href", (d) => {
        return `#rect${d.candidateId}`;
      });
    _node
      .append("svg:image")
      .attr("xlink:href", (d) => {
        return d.imgUrl;
      })
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", 10)
      .attr("y", 20)
      .attr("clip-path", (d) => {
        return `url(#clip${d.candidateId})`;
      }); //与上面的clipPath：href关联
    const nameNode = _node
      .append("text")
      .attr("x", 60)
      .attr("y", 37)
      .style("text-anchor", "left")
      .attr("font-size", 12)
      .attr("font-weight", 600)
      .style("fill", "#424656")
      .attr("style", (d) => {
        return "cursor: default";
      })
      .text((d) => {
        return d.name;
      })
      .on("mouseout", () => {})
      .on("mouseover", (event, d) => {
        // console.log(event, d)
      });
    const titleNode = _node
      .append("text")
      .attr("x", 60)
      .attr("y", 57)
      .style("text-anchor", "left")
      .attr("font-size", 10)
      .attr("font-weight", 600)
      .style("fill", "#7D8292")
      .attr("style", (d) => {
        return "cursor: default";
      })
      .text((d) => {
        return d.title.length > 7 ? `${d.title.substring(0, 8)}...` : d.title;
      })
      .on("mouseout", () => {
        this.renderTip({
          isShowTip: false,
        });
      })
      .on("mouseover", (event, d) => {
        this.renderTip({
          tipTitle: d.title,
          tipLeft: d.x,
          tipTop: d.y,
          isShowTip: true,
        });
      });
    currentNode.on("click", (event, d) => {
      // console.log(event, d, 88)
    });
    currentNode.attr("style", () => {
      return "cursor: pointer";
    });
  };
  drawLinks(svg, links) {
    svg
      .append("marker")
      .attr("id", "resolved")
      .attr("markerUnits", "strokeWidth") // 设置为strokeWidth，箭头会随着线的粗细变化
      .attr("markerUnits", "userSpaceOnUse")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 3) // 箭头坐标
      .attr("refY", 0)
      .attr("markerWidth", 6) // 标识大小
      .attr("markerHeight", 6)
      .attr("orient", "auto") // 绘制方向，可设定为auto(自动确认方向)和角度值
      .attr("stroke-width", 2) // 箭头宽度
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#FD6720");
    const _this = this;
    links.forEach((l) => {
      const classTag =
        l.sourceId > l.targetId
          ? `${l.sourceId}-${l.targetId}`
          : `${l.targetId}-${l.sourceId}`;
      if (l.type === "equal") {
        svg
          .selectAll(`.link-${classTag}`)
          .data([l])
          .enter()
          .append("path")
          .attr("class", (d) => {
            return `link-${d.sourceId} link-${d.targetId} link-${classTag}`;
          })
          .attr("d", (d) => {
            const node = _this.state.nodes.filter(
              (n) => n.candidateId === d.targetId
            )[0];
            return _this.getPath(node, d);
          })
          .attr("fill", "none")
          .attr("stroke", "#FD6720")
          .attr("stroke-width", 1);
      } else {
        svg
          .selectAll(`.link-${classTag}`)
          .data([l])
          .enter()
          .append("path")
          .attr("class", (d) => {
            return `link-${d.sourceId} link-${d.targetId} link-${classTag}`;
          })
          .attr("d", (d) => {
            const node = _this.state.nodes.filter(
              (n) => n.candidateId === d.targetId
            )[0];
            return _this.getPath(node, d);
          })
          .attr("fill", "none")
          .attr("stroke", "#FD6720")
          .attr("stroke-width", 1)
          .attr("marker-end", "url(#resolved)");
      }
    });
  }
  getPath(move, tag) {
    const { nodes } = this.state;
    const rectWidth = 188;
    const rectHeight = 81;
    let sourceId = tag.sourceId;
    if (move.candidateId === tag.sourceId) {
      sourceId = tag.targetId;
    }
    let path;
    const { x, y } = nodes.filter((n) => n.candidateId === sourceId)[0];
    const { location } = nodes.filter((n) => n.candidateId === tag.targetId)[0];
    switch (tag.type) {
      case "superior":
        path = `M${x + rectWidth / 2} ${y - 5}
        L${x + rectWidth / 2} ${y - 20}
        L${move.x + rectWidth / 2} ${y - 20}
        L${move.x + rectWidth / 2} ${move.y + 89}`;
        break;
      case "equal":
        if (location) {
          if (location === "right") {
            path = `M${move.x - 28} ${y + rectHeight / 2}
            L${move.x - 15} ${y + rectHeight / 2}
            L${move.x - 5} ${move.y + rectHeight / 2}`;
          } else {
            path = `M${move.x + 217} ${move.y + rectHeight / 2}
            L${move.x + 205} ${y + rectHeight / 2}
            L${move.x + 192} ${y + rectHeight / 2}`;
          }
        }
        break;
      case "subordinate":
        path = `M${move.x + rectWidth / 2} ${move.y - 5}
        L${move.x + rectWidth / 2} ${y + rectHeight / 2 + 65}
        L${x + rectWidth / 2} ${y + rectHeight / 2 + 65}
        L${x + rectWidth / 2} ${y + rectHeight / 2 + 50}`;
        break;
      default:
        break;
    }
    return path;
  }

  renderTip = (config) => {
    const { tipTitle, isShowTip } = config;
    // setTimeout(() => {

    // }, 100)
    const tipLeft = window.event.clientX + 20;
    const tipTop = window.event.clientY;
    this.setState({
      tipTitle,
      tipLeft,
      tipTop,
      isShowTip,
    });
  };

  render() {
    const { tipTitle, tipLeft, tipTop, isShowTip } = this.state;
    return (
      <div>
        渲染svg
        <div id="drawSVG"></div>
        {isShowTip && (
          <div
            className={styles.tip}
            style={{
              position: "fixed",
              left: tipLeft,
              top: tipTop,
            }}
          >
            {tipTitle}
          </div>
        )}
      </div>
    );
  }
}

export default DThree;
