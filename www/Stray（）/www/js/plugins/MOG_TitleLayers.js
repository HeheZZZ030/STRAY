//=============================================================================
// MOG_TitleLayers.js
//=============================================================================

/*:
 * @plugindesc 【MOG系列】标题多图背景|MOG_TitleLayers.js
 * @author Moghunter
 *
 * @param -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 主要 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *  
 * @param Screen Movement
 * @text 屏幕移动
 * @desc 启用屏幕运动动画
 * @default false
 * @type boolean 
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Move Speed
 * @text 屏幕移动速度
 * @desc 移动速度
 * @default 1
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Move Duration
 * @text 屏幕移动持续时间
 * @desc 是时候改变方向
 * @default 160
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param L1 Visible
 * @text L1 可见
 * @desc 启用图层
 * @default true
 * @type boolean 
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 File Name
 * @text L1 文件名
 * @desc Definição do nome do arquivo.
 * @default Layer1
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 X-axis / Scroll
 * @text L1 X 轴/滚动
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 0
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 Y-axis / Scroll
 * @text L1 Y 轴/滚动
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 Blend Mode
 * @text L1 混合模式
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option 正常
 * @value 0
 * @option 递增
 * @value 1 
 * @option 递减
 * @value 2
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 Transition Time
 * @text L1 过渡时间
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 Animated
 * @text L1 动画
 * @desc 启用帧动画
 * @default true
 * @type boolean 
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 Frames
 * @text L1 帧数
 * @desc 动画帧数
 * @default 4
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 Animation Speed
 * @text L1 动画速度
 * @desc 动画速度
 * @default 20
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param
 * 
 * @param -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L2 Visible
 * @text L2 可见
 * @desc Ativar Camada.
 * @default true
 * @type boolean 
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 File Name
 * @text L2 文件名
 * @desc Definição do nome do arquivo.
 * @default Layer2
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 X-axis / Scroll
 * @text L2 X 轴/滚动
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 0.5
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Y-axis / Scroll
 * @text L2 Y 轴/滚动
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Blend Mode
 * @text L2 混合模式
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Transition Time
 * @text L2 过渡时间
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<<  
 *
 * @param L2 Animated
 * @text L2 动画
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean 
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Frames
 * @text L2 帧数
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Animation Speed
 * @text L2 动画速度
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param
 * 
 * @param -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L3 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L3 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer3
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 0
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L4 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer4
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 0.9
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L5 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer5
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.1
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L6 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer6
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.3
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L7 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer7
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.5
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L8 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer8
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.7
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L9 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer9
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.9
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 图层 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L10 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer10
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 2.1
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean 
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @help  
 * =============================================================================
 * +++ MOG - Title Layers (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * 汉化：硕明云书
 * =============================================================================
 * 将多个图层添加到标题屏幕
 *
 * =============================================================================
 * 图像放置
 * =============================================================================
 * 文件夹中的图像 /img/titles1/
 *
 * =============================================================================
 * 动画（帧）
 * =============================================================================
 * 通过帧激活动画功能激活参数插件
 *
 * LX 动画
 * 
 * 帧图像必须遵循以下标准。
 *
 * FILE_NAME + _ID.png
 *
 * Exemplo
 *
 * Layer0.png
 * Layer1.png
 * Layer2.png
 * Layer3.png
 * ...
 *
 * ============================================================================
 * - 新增功能（版本 1.1）
 * ============================================================================
 * -（新） - 插件参数兼容RM1.5+
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TitleLayers = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleLayers');
	Moghunter.titleBackM = 10;	
	Moghunter.titleBackV = [];	Moghunter.titleBackN = [];
	Moghunter.titleBackX = [];	Moghunter.titleBackY = [];
	Moghunter.titleBackZ = [];	Moghunter.titleBackT = [];
	Moghunter.titleBackAN = [];	Moghunter.titleBackAF = [];
	Moghunter.titleBackAS = [];	Moghunter.titleBackMode = [];
	Moghunter.titleBackB = [];
	Moghunter.titleBackW = String(Moghunter.parameters['Screen Movement'] || "false"); 	
	Moghunter.titleBackWS = Number(Moghunter.parameters['Screen Move Speed'] || 1);
	Moghunter.titleBackWD = Number(Moghunter.parameters['Screen Move Duration'] || 160);
	for (var i = 0; i < Moghunter.titleBackM; i++) {	
	    Moghunter.titleBackV[i] = String(Moghunter.parameters['L' + String(i + 1) + " Visible"] || "false"); 	
		Moghunter.titleBackN[i] = String(Moghunter.parameters['L' + String(i + 1) + " File Name"] || "Layer"); 
        Moghunter.titleBackMode[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Mode"] || 0);
		Moghunter.titleBackZ[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Z Index"] || 0); 
		Moghunter.titleBackX[i] = Number(Moghunter.parameters['L' + String(i + 1) + " X-axis / Scroll"] || 1);
		Moghunter.titleBackY[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Y-axis / Scroll"] || 1);
		Moghunter.titleBackT[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Transition Time"] || 0);
		Moghunter.titleBackAN[i] = String(Moghunter.parameters['L' + String(i + 1) + " Animated"] || "false");
		Moghunter.titleBackAF[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Frames"] || 4);
		Moghunter.titleBackAS[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Animation Speed"] || 20);
		Moghunter.titleBackB[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Blend Mode"] || 0);
	};

//=============================================================================
// ** Game_Temp
//=============================================================================	

//==============================
// * Initialize
//==============================
var _mog_tbackround_gtemp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    _mog_tbackround_gtemp_initialize.call(this);
	this._titlebaData = [0,0,0];
};

//=============================================================================
// ** Scene Title
//=============================================================================	

//==============================
// * Create
//==============================
var _mog_backtitle_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
	_mog_backtitle_create.call(this);
	if (this._titleField) {this._titleField.children.sort(function(a, b){return a.zIndex-b.zIndex})}
};

//==============================
// * Create Background
//==============================
var _mog_title_background_effects_createBackground = Scene_Title.prototype.createBackground
Scene_Title.prototype.createBackground = function() {
	_mog_title_background_effects_createBackground.call(this);
    this._backSprite1.visible = false;
    this._backSprite2.visible = false;    
	if (!this._titleField) {this.createTitleField()};
	this.createBackgroundEX();
};
  
//==============================
// * Create Title Field
//==============================
Scene_Title.prototype.createTitleField = function() {
    this._titleField = new Sprite();
	this.addChild(this._titleField);
};  

//==============================
// * Create BackgroundEX
//==============================
Scene_Title.prototype.createBackgroundEX = function() {
    this._backgroundEX = [];
	this._backData = []
	this._backData[0] = Graphics.boxWidth * 10 / 100;
	this._backData[1] = Graphics.boxHeight * 10 / 100;
	this._backData[2] = Graphics.boxWidth + (this._backData[0] * 2);
	this._backData[3] = Graphics.boxHeight + (this._backData[1] * 2);
	for (var i = 0; i < Moghunter.titleBackM; i++) {
		 this._backgroundEX[i] = new TitleBackground(i,this._backData);
		 this._backgroundEX[i].zIndex = i;
		 this._titleField.addChild(this._backgroundEX[i]);
    };
	this._ba = [0,0,0,0];
	this._backWave = String(Moghunter.titleBackW) == "true" ? true : false;
	this._backWaveSpd = Number(Moghunter.titleBackWS);
	this._backWaveDur = Number(Moghunter.titleBackWD);
};

//==============================
// * xl1
//==============================
Scene_Title.prototype.xl1 = function() {
    return -this._backData[0];
};

//==============================
// * xl2
//==============================
Scene_Title.prototype.xl2 = function() {
    return this._backData[0];
};

//==============================
// * yl1
//==============================
Scene_Title.prototype.yl1 = function() {
    return -this._backData[1];
};

//==============================
// * yl2
//==============================
Scene_Title.prototype.yl2 = function() {
    return this._backData[1];
};

//==============================
// * Refresh TFL
//==============================
Scene_Title.prototype.refreshTfl = function() {
     this._ba[2] = this._backWaveDur;
	 var s1 = this._backWaveSpd * 0.01;
	 var s2 = this._backWaveSpd * 0.1;
	 var r = Math.randomInt(2);
	 var x = s1 + Math.random() * s2;
	 this._ba[0] = r === 0 ? x : -x;
	 var r = Math.randomInt(2);
	 var y = s1 + Math.random() * s2;
	 this._ba[1] = r === 0 ? y : -y;	 
};

//==============================
// * Update Back Wave
//==============================
Scene_Title.prototype.updateBackWave = function() {
	  this._titleField.x += this._ba[0];
	  this._titleField.y += this._ba[1];
	  this._ba[2]--;
	  if (this.needRefreshTfl()) {this.refreshTfl()};
	  this.checkTfl();
};

//==============================
// * need Refresh T
//==============================
Scene_Title.prototype.needRefreshTfl = function() {
	  if (this._ba[2] <= 0) {return true};
	  return false
};

//==============================
// * Check Tfl
//==============================
Scene_Title.prototype.checkTfl = function() {
	  if (this._titleField.x < this.xl1()) {this.refreshTfl();this._titleField.x = this.xl1()}; 
	  if (this._titleField.x > this.xl2()) {this.refreshTfl();this._titleField.x = this.xl2()};
	  if (this._titleField.y < this.yl1()) {this.refreshTfl();this._titleField.y = this.yl1()}; 
	  if (this._titleField.y > this.yl2()) {this.refreshTfl();this._titleField.y = this.yl2()};	
	  $gameTemp._titlebaData[0] = this._titleField.x;
	  $gameTemp._titlebaData[1] = this._titleField.y;
};

//==============================
// * Create Background
//==============================
var _mog_title_background_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
	_mog_title_background_update.call(this);
    if (this._backgroundEX && this._backWave) {this.updateBackWave()};
};
  

//=============================================================================
// ** Title Background
//=============================================================================
function TitleBackground() {
    this.initialize.apply(this, arguments);
};

TitleBackground.prototype = Object.create(Sprite.prototype);
TitleBackground.prototype.constructor = TitleBackground;

//==============================
// * Initialize
//==============================
TitleBackground.prototype.initialize = function(index,data) {
    Sprite.prototype.initialize.call(this);
	this._index = index;
	this._enable = String(Moghunter.titleBackV[this._index]) === "true" ? true : false;
	if (this._enable) {
		this._data = data;
		this._wave = String(Moghunter.titleBackW) == "true" ? true : false;
		this._mode = Number(Moghunter.titleBackX[this._index]) == 0 && Number(Moghunter.titleBackY[this._index]) == 0 ? 1 : 0;
		this.createSprite();
	};
};

//==============================
// * Screen Width
//==============================
TitleBackground.prototype.screenWidth = function() {
    return this._data[2] + 4;
};

//==============================
// * Screen Height
//==============================
TitleBackground.prototype.screenHeight = function() {
    return this._data[3] + 4;
};

//==============================
// * Is Animated
//==============================
TitleBackground.prototype.isAnimated = function() {
    return this._anime[0];
};

//==============================
// * Frame Index
//==============================
TitleBackground.prototype.frameIndex = function() {
    return this._anime[1];
};

//==============================
// * max Frames
//==============================
TitleBackground.prototype.maxframes = function() {
    return this._anime[2];
};

//==============================
// * Frame Speed
//==============================
TitleBackground.prototype.frameSpeed = function() {
    return this._anime[3];
};

//==============================
// * Update Frames
//==============================
TitleBackground.prototype.updateFrames = function() {
    this._anime[4]++;
	if (this._anime[4] < this.frameSpeed()) {return};
	this._anime[4] = 0;
	this.refreshFrames();
};

//==============================
// * refresh Frames
//==============================
TitleBackground.prototype.refreshFrames = function() {
	this._anime[1]++;
	if (this._anime[1] >= this.maxframes()) {this._anime[1] = 0};	
    this.setBitmap()
};

//==============================
// * Load Bitmap
//==============================
TitleBackground.prototype.loadBitmap = function() {
	this._anime = [];
	this._anime[0] = String(Moghunter.titleBackAN[this._index]) === "true" ? true : false;
	this._anime[1] = 0;
	this._anime[2] = this._anime[0] ? Moghunter.titleBackAF[this._index] : 1;
	this._anime[3] = Moghunter.titleBackAS[this._index];
	this._anime[4] = 0;
	this._imgs = [];
	if (!this.isAnimated()) {
		   var name = String(Moghunter.titleBackN[this._index]);
		   this._imgs[0] = ImageManager.loadTitle1(name);
	} else {
		for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   var name = String(Moghunter.titleBackN[this._index]) + "_" + i;
		   this._imgs[i] = ImageManager.loadTitle1(name);
		};	   
	};
};

//==============================
// * Set Bitmap
//==============================
TitleBackground.prototype.setBitmap = function() {
	 this._back.bitmap = this._imgs[this.frameIndex()];
};

//==============================
// * Create Sprite
//==============================
TitleBackground.prototype.createSprite = function() {	
	this.loadBitmap();
	if (this._mode == 0) {
	    this._back = new TilingSprite();
		this.setBitmap();
		this._back.move(0,0,Graphics.boxWidth,Graphics.boxHeight);
	} else {
		this._back = new Sprite();
		if (this._wave) {
		    this._back.anchor.x = 0.5;
		    this._back.anchor.y = 0.5;
		};
	};
	this.setBitmap();
	this._back._start = false;
	this._back.org = [0,0];
	this._back.sx = Number(Moghunter.titleBackX[this._index]);
	this._back.sy = Number(Moghunter.titleBackY[this._index]);
	this._back.rt = 0;
	this._back.t = Number(Moghunter.titleBackT[this._index]);
	this._back.opacity = this._back.t > 0 ? 0 : 255;
	this._back.blendMode = Moghunter.titleBackB[this._index];
	this.addChild(this._back);
};

//==============================
// * load Bitmap B
//==============================
TitleBackground.prototype.getData = function() {
	this._back._start = true;
    this.setCenter();
};

//==============================
// * Set Center
//==============================
TitleBackground.prototype.setCenter = function() {
	this._back._start = true;
	if (this._wave) {
		this.setWave()
	} else {;
		if (this._mode === 0) {
			this._back.move(0,0,Graphics.boxWidth,Graphics.boxHeight);
		} else {
			this._back.x = this._back.sx;
			this._back.y = this._back.sy;	
		};
	};
	this._back.org = [this._back.x,this._back.y];
};

//==============================
// * Set Center
//==============================
TitleBackground.prototype.setWave = function() {
     this.fitScreen();
	 this.setWaveCenter();
};

//==============================
// * set Wave Center
//==============================
TitleBackground.prototype.setWaveCenter = function() {
	if (this._mode === 0) {
		var w = this.screenWidth();
		var h = this.screenHeight();
		var x = (this.screenWidth() - Graphics.boxWidth) / 2;
		var y = (this.screenHeight() - Graphics.boxHeight) / 2;
		this._back.move(-x,-y,w,h);
	} else {
      this._back.x = Graphics.boxWidth / 2;
      this._back.y = Graphics.boxHeight / 2;
	};
};

//==============================
// * Fit Screen
//==============================
TitleBackground.prototype.fitScreen = function() {
	this._back.scale.x = this.screenWidth() / this._back.bitmap.width;
	this._back.scale.y = this.screenHeight() / this._back.bitmap.height;
     
};

//==============================
// * Update Scroll
//==============================
TitleBackground.prototype.updateScroll = function() {
	this._back.origin.x += this._back.sx; //this._back.sx;
	this._back.origin.y += this._back.sy; //this._back.sy;
};

//==============================
// * Update Wave
//==============================
TitleBackground.prototype.updateWave = function() {
    this._back.x = this._back.org[0];
	this._back.y = this._back.org[1];
};

//==============================
// * Update Background
//==============================
TitleBackground.prototype.updateBackground = function() {
	if (this._back.t > 0) {this._back.t--;return};
	this._back.opacity += 2;
    if (this._mode == 0) {
		this.updateScroll();
	} else {
	   if (this._wave) {this.updateWave()};	
	};
	if (this.isAnimated()) {this.updateFrames()};
};

//==============================
// * Update
//==============================
TitleBackground.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._enable) {
		if (!this._back._start) {
			if (this._back.bitmap.isReady()) {this.getData()};
		} else {
			this.updateBackground();
		};
	};
};