(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(self, function() {
return (self["webpackChunkwebpackNumbers"] = self["webpackChunkwebpackNumbers"] || []).push([[4],{},
0,[[5,3],[6,3]]]);
});