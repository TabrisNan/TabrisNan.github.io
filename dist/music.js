const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: true,
    autoplay: true,
    listFolded: true,
    preload: 'auto',
    mutex: true,
    // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
    loop: 'all',
    lrcType: 1,
    volume: 0.4, //默认音量
    audio: [{
        theme: 'blue',
        name: '明日への手紙 (写给明天的信)',
        artist: '手嶌葵 (てしま あおい)',
        url: 'https://music.163.com/song/media/outer/url?id=28850646',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000043adKo2JEAea_1.jpg?max_age=2592000',
        lrc: ""
      }, 
      {
        theme: 'blue',
        name: '어른 (大人) (《我的大叔》韩剧插曲)',
        artist: ' Sondia (손디아)',
        url: 'https://sharefs.yun.kugou.com/202003211406/3ea73ed3656d0385778d1f73b28156f1/G128/M0B/03/05/IIcBAFq8oXKALa4-AD94VdJd13Q159.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Mix2w1utUOr_1.jpg?max_age=2592000',
      },
      {
        theme: 'blue',
        name: 'プロローグ',
        artist: 'Uru',
        url: 'https://music.163.com/song/media/outer/url?id=1321382214',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001kUri631QieH_1.jpg?max_age=2592000',
      },
      {
        theme: 'blue',
        name: '혜화동 (혹은 쌍문동) (惠化洞 （或双门洞）)',
        artist: '朴宝蓝 (박보람)',
        url: 'http://fdfs.xmcdn.com/group63/M0B/99/33/wKgMcl0yYNOi0BWnACA_VHvbwzo444.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003SV03p4RPnha_1.jpg?max_age=2592000',
      }
    ]
  });
  