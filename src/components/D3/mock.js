import catImg from '@assets/images/pet/25.png'
import dogImg from '@assets/images/pet/01.png'
import dog2Img from '@assets/images/pet/02.png'

export const nodeData = {
  nodes: [
    {name:'王强', title:'经理', imgUrl: dogImg, candidateId:'a0'},
    {name:'小美', title:'总监', imgUrl: catImg, candidateId:'a1'},
    {name:'阿呆', title:'销售', imgUrl: dog2Img, candidateId:'a2'},
    {name:'jerry', title:'总监', imgUrl: catImg, candidateId:'a3'},
    {name:'tom', title:'销售', imgUrl: dog2Img, candidateId:'a4'},
    {name:'123', title:'总监', imgUrl: catImg, candidateId:'a5'},
    {name:'456', title:'销售', imgUrl: dog2Img, candidateId:'a6'},
    {name:'kaka', title:'超长的一个字符串哈哈哈哈', imgUrl: dog2Img, candidateId:'a7'},
  ],
  links: [
    {sourceId:'a0', targetId:'a1', type:"superior"},
    {sourceId:'a0', targetId:'a2', type:"equal"},
    {sourceId:'a0', targetId:'a3', type:"subordinate"},
    {sourceId:'a0', targetId:'a4', type:"equal"},
    {sourceId:'a0', targetId:'a5', type:"equal"},
    {sourceId:'a0', targetId:'a6', type:"subordinate"},
    {sourceId:'a0', targetId:'a7', type:"superior"},
  ]
}
