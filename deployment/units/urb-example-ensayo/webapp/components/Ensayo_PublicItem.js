Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _reactHelmet=require('react-helmet');var _reactHelmet2=_interopRequireDefault(_reactHelmet);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Card=require('material-ui/Card');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Ensayo_PublicItem=function(_React$Component){_inherits(Ensayo_PublicItem,_React$Component);function Ensayo_PublicItem(){_classCallCheck(this,Ensayo_PublicItem);return _possibleConstructorReturn(this,(Ensayo_PublicItem.__proto__||Object.getPrototypeOf(Ensayo_PublicItem)).apply(this,arguments));}_createClass(Ensayo_PublicItem,[{key:'render',value:function render()


{

var contentH1=this.props.Viewer.Ensayo.Ensayo_Title.substring(0,100);
var contentH2=this.props.Viewer.Ensayo.Ensayo_Description.substring(0,100);

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_reactHelmet2.default,{
title:this.props.Viewer.Ensayo.Ensayo_Title,
meta:[
{name:"description",content:this.props.Viewer.Ensayo.Ensayo_Description}]}),


_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{
title:_react2.default.createElement('h1',{style:{fontSize:15}},contentH1),
subtitle:_react2.default.createElement('h2',{style:{fontSize:14,fontWeight:'normal'}},contentH2)}),

_react2.default.createElement(_Card.CardText,null,
this.props.Viewer.Ensayo.Ensayo_Content))));




}}]);return Ensayo_PublicItem;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(Ensayo_PublicItem,{

initialVariables:
{
id:null},


prepareVariables:function prepareVariables(_ref)
{var id=_ref.id;
return{id:id};
},

fragments:{
Viewer:function Viewer(){return function(){return{children:[{calls:[{kind:'Call',metadata:{},name:'id',value:{kind:'CallVariable',callVariableName:'id'}}],children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Ensayo_Title',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Description',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Content',kind:'Field',metadata:{},type:'String'}],fieldName:'Ensayo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Ensayo'},{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_PublicItem_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=Ensayo_PublicItem.js.map