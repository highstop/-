function parseLyric(lrc) {
	    var lyrics = lrc.split("\n");
	    var lrcObj = {};
	    for(var i=0;i<lyrics.length;i++){
	        var lyric = decodeURIComponent(lyrics[i]);
	        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
	        var timeRegExpArr = lyric.match(timeReg);
	        if(!timeRegExpArr)continue;
	        var clause = lyric.replace(timeReg,'');
	        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
	            var t = timeRegExpArr[k];
	            var min = Number(String(t.match(/\[\d*/i)).slice(1)), sec = Number(String(t.match(/\:\d*/i)).slice(1));
	            var time = min * 60 + sec;
	            lrcObj[time] = clause;
	        }
	    }
	    return lrcObj;
	}

var musicLrc = {};

Page({
  onLoad:function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 130
        })
      }
    })

musicLrc = parseLyric(that.data.music.lrc)
    console.log(musicLrc)

    wx.request({
      url: 'http://www.zhangfu.online/music/audio.php', 
      dataType:'json',
      success: function(res) {
       that.setData({
         musicList:res.data
       })
      }
    })
  },


  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    percent:0,
    scrollHeight:0,
    music: {
        id:0,
        poster:'http://www.zhangfu.online/music/1.jpg',
        name:'我好想你',
        author:'苏打绿',
        src:'http://www.zhangfu.online/music/1.mp3',
        lrc:`[ti:我好想你]
[ar:苏打绿]
[al:]
[by:张拂]
[00:02.47]我好想你
[00:03.91]词曲：吴青峰
[00:06.86]演唱：苏打绿
[00:09.96]代码男神：zf
[00:39.06]开了灯 眼前的模样
[00:43.33]偌大的房 寂寞的床
[00:51.66]关了灯 全都一个样
[00:55.80]心里的伤 无法分享
[01:02.15]生命随年月流去
[01:06.54]随白发老去
[01:09.87]随着你离去 快乐渺无音讯
[01:16.26]随往事淡去
[01:18.99]随梦境睡去
[01:22.26]随麻痹的心逐渐远去
[01:27.19]我好想你 好想你
[01:33.49]却不露痕迹
[01:40.27]我还踮着脚思念
[01:46.25]我还任记忆盘旋
[01:52.59]我还闭着眼流泪
[01:58.61]我还装作无所谓
[02:05.22]我好想你 好想你
[02:11.44]却欺骗自己
[02:45.47]开了灯 眼前的模样
[02:49.48]偌大的房 寂寞的床
[02:57.75]关了灯 全都一个样
[03:01.99]心里的伤 无法分享
[03:08.30]生命随年月流去
[03:12.66]随白发老去
[03:15.97]随着你离去 快乐渺无音讯
[03:22.54]随往事淡去
[03:25.36]随梦境睡去
[03:28.53]随麻痹的心逐渐远去
[03:33.38]我好想你 好想你
[03:39.66]却不露痕迹
[03:46.31]我还踮着脚想念
[03:52.46]我还任记忆盘旋
[03:58.87]我还闭着眼流泪
[04:05.07]我还装作无所谓
[04:14.43]我好想你 好想你
[04:20.64]却欺骗自己
[04:26.89]我好想你 好想你
[04:33.23]就当作秘密
[04:39.63]我好想你 好想你
[04:46.21]就深藏在心
[04:52.73]`
      },

    musicList:[  {
        id:0,
        poster:'http://www.zhangfu.online/music/1.jpg',
        name:'我好想你',
        author:'苏打绿',
        src:'http://www.zhangfu.online/music/1.mp3'
      },
      {
        id:1,
        poster:'http://www.zhangfu.online/music/2.jpg',
        name:'小情歌',
        author:'苏打绿',
        src:'http://www.zhangfu.online/music/2.mp3',
        lrc:`[00:00.71]小情歌
[00:01.74]演唱：苏打绿
[00:02.87]这首歌送正正童鞋
[00:28.12]这是一首简单的小情歌
[00:35.36]唱着人们心肠的曲折
[00:41.15]我想我很快乐 当有你的温热
[00:48.24]脚边的空气转了
[00:54.16]
[01:09.93]这是一首简单的小情歌
[01:17.17]唱着我们心头的白鸽
[01:22.89]我想我很适合 当一个歌颂者
[01:30.42]青春在风中飘着
[01:36.10]
[01:36.80]你知道 就算大雨让这座城市颠倒
[01:41.31]我会给你怀抱
[01:43.66]受不了 看见你背影来到
[01:47.13]写下我 度秒如年难捱的离骚
[01:51.47]就算整个世界被寂寞绑票
[01:54.97]我也不会奔跑
[01:57.55]逃不了 最後谁也都苍老
[02:00.91]写下我 时间和琴声交错的城堡
[02:07.40]
[02:24.36]这是一首简单的小情歌
[02:30.09]唱着我们心头的白鸽
[02:35.51]我想我很适合 当一个歌颂者
[02:42.98]青春在风中飘着
[02:49.07]你知道 就算大雨让这座城市颠倒
[02:53.88]我会给你怀抱
[02:56.25]受不了 看见你背影来到
[02:59.73]写下我 度秒如年难捱的离骚
[03:04.15]就算整个世界被寂寞绑票
[03:07.70]我也不会奔跑
[03:10.40]逃不了 最後谁也都苍老
[03:13.75]写下我 时间和琴声交错的城堡
[03:20.13]你知道 就算大雨让这座城市颠倒
[03:25.42]我会给你怀抱
[03:28.30]受不了 看见你背影来到
[03:31.25]写下我 度秒如年难捱的离骚
[03:35.76]就算整个世界被寂寞绑票
[03:39.14]我也不会奔跑
[03:42.63]最後谁也都苍老
[03:45.17]写下我 时间和琴声交错的城堡
[03:54.87]`
      },
      {
        id:2,
        poster:'http://www.zhangfu.online/music/3.jpg',
        name:'无与伦比的美丽',
        author:'苏打绿',
        src:'http://www.zhangfu.online/music/3.mp3'
      },
      {
        id:3,
        poster:'http://www.zhangfu.online/music/4.jpg',
        name:'下雨的夜晚',
        author:'苏打绿',
        src:'http://www.zhangfu.online/music/4.mp3'
      },
      {
        id:4,
        poster:'http://www.zhangfu.online/music/5.jpg',
        name:'春夏秋冬',
        author:'张国荣',
        src:'http://www.zhangfu.online/music/5.mp3'
      },
      {
        id:5,
        poster:'http://www.zhangfu.online/music/6.jpg',
        name:'左右手',
        author:'张国荣',
        src:'http://www.zhangfu.online/music/6.mp3'
      },
      {
        id:6,
        poster:'http://www.zhangfu.online/music/7.jpg',
        name:'她',
        author:'不可撤销',
        src:'http://www.zhangfu.online/music/7.mp3'
      },
      {
        id:7,
        poster:'http://www.zhangfu.online/music/8.jpg',
        name:'父亲写的散文诗',
        author:'许飞',
        src:'http://www.zhangfu.online/music/8.mp3'
      },
      {
        id:8,
        poster:'http://www.zhangfu.online/music/9.jpg',
        name:'山外小楼夜听雨',
        author:'任然',
        src:'http://www.zhangfu.online/music/9.mp3'
      },
      {
        id:9,
        poster:'http://www.zhangfu.online/music/10.jpg',
        name:'Million Years Ago ',
        author:'Emir',
        src:'http://www.zhangfu.online/music/10.mp3'
      },
   ],

   musicText:'',


  },

  playMusic:function(event){
    var idx = event.target.dataset.idx;
    var that = this;
    console.log(this.data.musicList[idx])
    that.setData({
      music: this.data.musicList[idx] // 我们获取到了一个下标，然后通过这个下标去查找musicList中的对应位置的对象，然后再把这个对象设置到music这个数据内容中
    })
    
    setTimeout(function(){
       that.audioCtx.play();
    },500)
       
  },

// 当播放到末尾时触发 endedHandle 事件
  endedHandle:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id + 1>= that.data.musicList.length ){
      pos = 0;
    }else{
      pos = that.data.music.id + 1 ;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playingMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)

  },
  audioPlay: function () {
    this.audioCtx.play();
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(300)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  pro:function(event){
    // console.log(event.detail)

    var that = this;
    var second = parseInt(event.detail.currentTime);
    var per = event.detail.currentTime / event.detail.duration;
    that.setData({
      percent:parseInt(per*100),
      musicText: musicLrc[second]
    })
  },
  // 上一曲
 lastPlay:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id <= 0 ){
      pos = that.data.musicList.length - 1;
    }else{
      pos = that.data.music.id - 1 ;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playingMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)
  },
  // 下一曲 
  nextPlay:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id >= that.data.musicList.length - 1 ){
      pos = 0;
    }else{
      pos = that.data.music.id + 1 ;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playingMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)
  }
})