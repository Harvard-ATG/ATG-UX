(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define(["jquery","jst/jquery/ModuleSequenceFooter","underscore","i18n!sequence_footer","str/htmlEscape","jquery.ajaxJSON"],function(t,i,s,n,o){return function(t,i,u,r){var l,a;return a=0,t.fn.moduleSequenceFooter=function(e){var i=this;if(null==e&&(e={}),!e.assetType||!e.assetID)throw"Option must be set with assetType and assetID";return this.msfAnimation=function(e){return i.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!e)},this.msfInstance=new t.fn.moduleSequenceFooter.MSFClass(e),this.msfInstance.fetch().done(function(){return i.msfInstance.hide?void i.hide():(i.html(r({instanceNumber:i.msfInstance.instanceNumber,previous:i.msfInstance.previous,next:i.msfInstance.next})),void 0!==(null!=e?e.animation:void 0)&&i.msfAnimation(e.animation),i.show())}),this},t.fn.moduleSequenceFooter.MSFClass=l=function(){function i(t){this.success=e(this.success,this),this.instanceNumber=a++,this.courseID=(null!=t?t.courseID:void 0)||("undefined"!=typeof ENV&&null!==ENV?ENV.course_id:void 0),this.assetID=null!=t?t.assetID:void 0,this.assetType=null!=t?t.assetType:void 0,this.location=(null!=t?t.location:void 0)||u.location,this.previous={},this.next={},this.url="/api/v1/courses/"+this.courseID+"/module_item_sequence"}return i.prototype.iconClasses={ModuleItem:"icon-module",File:"icon-download",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link","Lti::MessageHandler":"icon-link"},i.prototype.getQueryParams=function(e){var t,i,s;for(e=e.split("+").join(" "),t={},i=/[?&]?([^=]+)=([^&]*)/g;s=i.exec(e);)t[decodeURIComponent(s[1])]=decodeURIComponent(s[2]);return t},i.prototype.fetch=function(){var e;return e=this.getQueryParams(this.location.search),e.module_item_id?t.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:e.module_item_id,frame_external_urls:!0},this.success,null,{}):t.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:!0},this.success,null,{})},i.prototype.success=function(e){var t;return this.modules=e.modules,1!==(null!=e&&null!=(t=e.items)?t.length:void 0)?void(this.hide=!0):(this.item=e.items[0],(this.next.show=this.item.next)&&this.buildNextData(),(this.previous.show=this.item.prev)?this.buildPreviousData():void 0)},i.prototype.buildPreviousData=function(){var e,t=this;return this.previous.url=this.item.prev.html_url,this.item.current.module_id===this.item.prev.module_id?(this.previous.tooltip="<i class='"+o(this.iconClasses[this.item.prev.type])+"'></i> "+o(this.item.prev.title),this.previous.tooltipText=n.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})):(e=s.find(this.modules,function(e){return e.id===t.item.prev.module_id}),this.previous.tooltip="<strong style='float:left'>"+o(n.t("prev_module","Previous Module:"))+"</strong> <br> "+o(e.name),this.previous.tooltipText=n.t("prev_module_desc","Previous Module: *module*",{wrapper:e.name}))},i.prototype.buildNextData=function(){var e,t=this;return this.next.url=this.item.next.html_url,this.item.current.module_id===this.item.next.module_id?(this.next.tooltip="<i class='"+o(this.iconClasses[this.item.next.type])+"'></i> "+o(this.item.next.title),this.next.tooltipText=n.t("next_module_item_desc","Next: *item*",{wrapper:this.item.next.title})):(e=s.find(this.modules,function(e){return e.id===t.item.next.module_id}),this.next.tooltip="<strong style='float:left'>"+o(n.t("next_module","Next Module:"))+"</strong> <br> "+o(e.name),this.next.tooltipText=n.t("next_module_desc","Next Module: *module*",{wrapper:e.name}))},i}()}(t,window,document,i)})}).call(this);