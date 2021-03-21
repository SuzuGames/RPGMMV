/*:
 * 
 * @plugindesc When you open the plugin you will find help.
 * @author SuzuGames | https://suzugames.wordpress.com
 * @desc To edit the plugin you need to open it. There isn't params at the moment.
 * @help Allows you to set custom ads in your game.
 * Write "ad();" in a script line of any event.
 * If you don't understand something: https://forums.rpgmakerweb.com/index.php?members/suzumito7u7.148841/
 *
 * 
 * +----------------------------------------------+
 * |                    DEVLOG                    |
 * +----------------------------------------------+
 * |                                              |
 * |                                              |
 * |              [v1.0] : 20-03-21               |
 * |                                              |      
 * | - Plugin release.                            |
 * +----------------------------------------------+
 * 
 * 
 * Made with <3 by Suzu.
 */ 


var params = PluginManager.parameters("Suzu_AdSystem");

var ad = function ()
{

  var var_ad = Math.floor((Math.random() * 5) + 1); // This is the number of ads you are going to use. You only need to replace |var ad = Math.floor((Math.random() * [THIS]) + 1);|
  // Example:  Math.floor((Math.random() * 3) + 1);
  // It means that there are 3 ads.

  if (navigator.onLine) // This checks if the player haves Internet.
  {

    var time = 10; // This is the time until the ad finish IN SECONDS.
    var time_script = time * 1000; // DON'T EDIT THIS.

    if (var_ad === 1) // From here, you need to set all the numbers you set on line 18 (Default is 5)
    {

        var windowObjRef = window.open("https://suzugames.wordpress.com"); // You can set the URL from someone. This will be the ad.

    };

    if (var_ad === 2)
    {

        var windowObjRef = window.open("https://suzugames.wordpress.com");

    };

    if (var_ad === 3)
    {

        var windowObjRef = window.open("https://suzugames.wordpress.com");

    };

    if (var_ad === 4)
    {

        var windowObjRef = window.open("https://suzugames.wordpress.com");

    };

    if (var_ad === 5)
    {

        var windowObjRef = window.open("https://suzugames.wordpress.com");
        
    };

  setTimeout(function(){

    if (windowObjRef.closed)
    {
    
        // The ad is closed. There isn't any reward here.
    
    }else{
    
        // The ad keeps opened. Here you can set the rewards.

        AudioManager.playSe({name: "Coin", pan: 0, pitch: 100, volume: 100}); // An audio to give feedback.
        var ad_gold = Math.floor((Math.random() * 10) + 1); // Generate random value for gold.
        $gameParty.gainGold(ad_gold); // Give random gold.
        windowObjRef.close(); // Close the ad.
    
    }
    
}, time_script);

};

};