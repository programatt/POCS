Search.setIndex({titleterms:{subpackag:0,weather:3,packag:[2,0,3,1,6],config:2,logger:2,content:[2,0,3,1,6],convert:2,simul:[3,6],camera:6,util:2,panopt:[1,6,2,4,0,3],canondslr:6,indic:[],link:5,tabl:[],poc:5,weatherst:3,mount:1,document:5,ioptron:1,aagcloudsensor:3,error:2,modul:[2,0,3,1,6],observatori:0,welcom:5,serial:2,submodul:[2,0,3,1,6]},objects:{"":{panoptes:[0,0,0,"-"]},"panoptes.utils.logger":{set_log_level:[2,2,1,""],has_logger:[2,2,1,""],Logger:[2,5,1,""]},"panoptes.mount":{ioptron:[1,0,0,"-"],mount:[1,0,0,"-"]},"panoptes.camera.CanonDSLR":{list_connected_cameras:[6,2,1,""],Camera:[6,5,1,""]},"panoptes.utils.error":{Error:[2,4,1,""],MountNotFound:[2,4,1,""],InvalidConfig:[2,4,1,""],CameraNotFound:[2,4,1,""],BadSerialConnection:[2,4,1,""],NotFound:[2,4,1,""],InvalidMountCommand:[2,4,1,""]},"panoptes.utils":{config:[2,0,0,"-"],error:[2,0,0,"-"],convert:[2,0,0,"-"],serial:[2,0,0,"-"],logger:[2,0,0,"-"]},"panoptes.utils.convert.Convert":{HA_to_Dec:[2,1,1,""],logger:[2,3,1,""]},"panoptes.camera.Simulator":{Camera:[6,5,1,""]},"panoptes.Panoptes":{start_session:[0,1,1,""],config:[0,3,1,""],logger:[0,3,1,""]},"panoptes.utils.logger.Logger":{info:[2,1,1,""],error:[2,1,1,""],exception:[2,1,1,""],warning:[2,1,1,""],config:[2,3,1,""],critical:[2,1,1,""],debug:[2,1,1,""]},"panoptes.weather.AAGCloudSensor":{decimal_hours:[3,2,1,""],AAGCloudSensor:[3,5,1,""]},"panoptes.utils.error.Error":{exit_program:[2,1,1,""],logger:[2,3,1,""]},"panoptes.camera.Simulator.Camera":{is_cooled:[6,1,1,""],connect:[6,1,1,""],start_cooling:[6,1,1,""],stop_cooling:[6,1,1,""],logger:[6,3,1,""],is_exposing:[6,1,1,""],is_cooling:[6,1,1,""],is_connected:[6,1,1,""]},"panoptes.weather":{WeatherStation:[3,0,0,"-"],Simulator:[3,0,0,"-"],AAGCloudSensor:[3,0,0,"-"]},"panoptes.camera.camera":{AbstractCamera:[6,5,1,""]},"panoptes.mount.ioptron":{Mount:[1,5,1,""]},"panoptes.weather.WeatherStation":{WeatherStation:[3,5,1,""]},"panoptes.utils.serial":{SerialData:[2,5,1,""]},"panoptes.weather.Simulator.Simulator":{make_safety_decision:[3,1,1,""],update_telemetry_files:[3,1,1,""],logger:[3,3,1,""]},"panoptes.mount.mount":{AbstractMount:[1,5,1,""]},"panoptes.camera":{camera:[6,0,0,"-"],Simulator:[6,0,0,"-"],CanonDSLR:[6,0,0,"-"]},"panoptes.weather.AAGCloudSensor.AAGCloudSensor":{read_AAG_telemetry:[3,1,1,""],get_rain_frequency:[3,1,1,""],update_telemetry_files:[3,1,1,""],query:[3,1,1,""],update_weather:[3,1,1,""],get_sky_temperature:[3,1,1,""],get_switch:[3,1,1,""],logger:[3,3,1,""],make_safety_decision:[3,1,1,""],clear_buffer:[3,1,1,""],get_errors:[3,1,1,""],query_int_median:[3,1,1,""],get_PWM:[3,1,1,""],get_ambient_temperature:[3,1,1,""],get_wind_speed:[3,1,1,""],wind_speed_enabled:[3,1,1,""],get_values:[3,1,1,""]},panoptes:{weather:[3,0,0,"-"],observatory:[0,0,0,"-"],utils:[2,0,0,"-"],mount:[1,0,0,"-"],camera:[6,0,0,"-"],Panoptes:[0,5,1,""]},"panoptes.mount.mount.AbstractMount":{slew_to_park:[1,1,1,""],slew_to_coordinates:[1,1,1,""],connect:[1,1,1,""],ping:[1,1,1,""],serial_write:[1,1,1,""],is_slewing:[1,3,1,""],serial_read:[1,1,1,""],setup_site:[1,1,1,""],initialize_mount:[1,1,1,""],sync_coordinates:[1,1,1,""],check_coordinates:[1,1,1,""],setup_commands:[1,1,1,""],logger:[1,3,1,""],echo:[1,1,1,""],serial_query:[1,1,1,""]},"panoptes.camera.camera.AbstractCamera":{logger:[6,3,1,""]},"panoptes.weather.Simulator":{Simulator:[3,5,1,""]},"panoptes.camera.CanonDSLR.Camera":{list_config:[6,1,1,""],set:[6,1,1,""],connect:[6,1,1,""],start_cooling:[6,1,1,""],simple_capture_and_download:[6,1,1,""],stop_cooling:[6,1,1,""],get:[6,1,1,""],command:[6,1,1,""],get_serial_number:[6,1,1,""],logger:[6,3,1,""],get_shutter_count:[6,1,1,""],set_iso:[6,1,1,""],get_model:[6,1,1,""],get_iso:[6,1,1,""],is_exposing:[6,1,1,""],get_device_version:[6,1,1,""]},"panoptes.observatory.Observatory":{create_mount:[0,1,1,""],while_sleeping:[0,1,1,""],while_slewing:[0,1,1,""],while_shutdown:[0,1,1,""],while_scheduling:[0,1,1,""],query_conditions:[0,1,1,""],while_analyzing:[0,1,1,""],config:[0,3,1,""],start_observing:[0,1,1,""],logger:[0,3,1,""],while_getting_ready:[0,1,1,""],create_weather_station:[0,1,1,""],while_imaging:[0,1,1,""],is_dark:[0,1,1,""],create_cameras:[0,1,1,""],get_state:[0,1,1,""],while_parking:[0,1,1,""],while_taking_test_image:[0,1,1,""],setup_site:[0,1,1,""],heartbeat:[0,1,1,""],while_parked:[0,1,1,""]},"panoptes.utils.serial.SerialData":{write:[2,1,1,""],connect:[2,1,1,""],clear_buffer:[2,1,1,""],read:[2,1,1,""],logger:[2,3,1,""]},"panoptes.observatory":{Observatory:[0,5,1,""]},"panoptes.weather.WeatherStation.WeatherStation":{update_logfiles:[3,1,1,""],check_conditions:[3,1,1,""],logger:[3,3,1,""]},"panoptes.mount.ioptron.Mount":{initialize_mount:[1,1,1,""],logger:[1,3,1,""]},"panoptes.utils.convert":{Convert:[2,5,1,""]},"panoptes.utils.config":{has_config:[2,2,1,""],load_config:[2,2,1,""],load_config_file:[2,2,1,""]}},terms:{safe:[0,3],"0x2adb9ed1bc50":6,clear:[2,3],number:[0,3,6],under:0,contin:0,addit:0,dure:0,exposur:0,damag:0,invok:0,failur:0,refer:3,extrem:0,enter:0,queri:[3,1,6],panopt:[],root:5,brief:0,about:0,critic:[2,0],asctim:[2,0],check:[0,3,1,6],"long":0,had:0,manual:3,datum:3,exptim:6,setup:1,flag:0,"case":0,envis:0,"0x2adb9ec2ccc0":6,end:0,while_shutdown:0,messag:[2,0,1],exit_program:2,set_lat:1,posit:[0,1],usb:6,last:0,distinct:0,org:[0,5],recommend:3,echo:1,especi:0,reload:2,get_stat:0,altern:0,algorithm:0,zener:3,rate:1,exist:[2,0],convert:[],content:[],has_logg:2,either:0,written:[0,3],progress:0,direct:0,log_fil:[2,0],depend:3,simluat:6,navg:3,system:0,has_config:2,argu:0,astrometr:[0,1],port:[2,0,1,6],interrupt:0,invalidconfig:2,scenario:0,where:0,leav:0,make_safety_decis:3,complet:0,safeti:0,you:[0,3],sensor:3,what:0,log_level:[2,0],twilight:0,type:3,fail:[2,0],site:[2,0,1],log_profil:[2,0],rs232_comms_v110:3,is_slew:1,analyz:0,touch:0,query_condit:0,horizon:0,allow:[2,0,6],get_model:6,success:0,gener:[2,3],guess:3,analysi:0,create_camera:0,"0x2adba2b85d30":3,someth:[0,1],caus:0,load_config_fil:2,rs232:3,typic:0,sec:0,sky_temp:3,when:[2,0],translat:1,detail:0,code:[0,3,5],just:[2,0,6],hold:0,repeat:0,camera:[],xxxx:3,pass:2,cmd:1,left:0,think:0,decor:2,local_config:2,park:[0,1],light:3,track:[0,1],builtin:[2,0,3,1,6],mostli:1,locat:0,imag:0,section:3,is_connect:6,analog2:3,median:3,mai:0,choos:0,iso_opt:6,dslr:6,whose:0,creat:0,found:2,weatherst:[],mount:[],"0x2adb9ed95be0":1,singleton:2,stop_cool:6,measur:3,write:[2,0,3,1],cameranotfound:2,procedur:1,complic:0,thi:[2,0,3,1,6],point:0,behind:0,pattern:3,is_dark:0,reduc:0,error:[],profil:2,devic:[3,6],wrapper:3,get_ambient_temperatur:3,pointer:3,level:[2,0],canondslr:[],advanc:0,merg:0,particular:3,alwai:0,adjust:0,cloudwatchernetwork:3,temperatur:[0,3],clear_buff:[2,3],"true":3,isn:3,should:[0,1],packag:[],timeout:0,astrometri:0,enough:0,www:3,them:[0,1],update_telemetry_fil:3,"switch":3,observ:0,buffer:[2,3],shutter_count:6,"while":0,longitud:[0,1],current_st:0,determin:[0,3,1],potenti:0,"abstract":1,get_device_vers:6,j2000_coordin:2,none:[2,0,1,6],"try":2,field:0,wait:0,get_iso:6,cool:[0,6],get_pwm:3,"0x2b5f2e902710":0,station:[0,3],canon:6,inherit:[],string:[3,1,6],circumst:0,rais:2,object:[2,0,3,1,6],readthedoc:[0,5],after:[2,0,3,1,6],yaml:5,usb_port:6,download:0,modul:[],set_local_tim:1,reach:[0,6],three:0,somewher:0,counter:3,j2000:1,plate:[0,1],differ:[2,0],between:0,while_slew:0,consider:0,hundredth:3,dir:[2,0],back:0,amount:0,invalid:2,"import":2,get_wind_spe:3,offset:[0,1],variou:1,query_int_median:3,befor:0,recent:0,pwm:3,celsiu:3,elev:[2,0],two:0,ttys0:3,popul:[0,3,6],motor:0,frequenc:3,logger:[1,6],mean:[0,6],pdf:3,issu:0,unsaf:3,than:[0,3],given:[2,0],internal_voltag:3,param:1,suggest:0,firmwar:3,formal:0,need:[0,1],log:[2,0],ensur:0,pec:3,form:1,is_expos:6,get_sky_temperatur:3,how:1,gphoto2:6,edg:0,load_config:2,expect:3,basic:1,broken:0,conveni:2,run:2,requir:[0,1,5],dark:0,still:0,"default":2,expos:0,"return":[0,3,1],"1st":3,start_dat:0,list_connected_camera:6,get:[0,3,6],cloud:3,our:2,item:[0,3],"0x2adb9e1d86a0":[],state:0,slew:[0,1],must:0,stop:0,ioptron:[],now:[2,0],becaus:0,yet:0,set_iso:6,subsequ:1,onc:1,block:[0,3],"byte":3,search:[],implement:1,infra:3,plu:0,want:0,ldr_resist:3,night:0,"0x2adba3e8d2e8":3,"0x2adb9ecf3278":2,aagcloudsensor:[],here:1,acceleromet:1,disable_daylight_sav:1,first:[0,1],mountinfo:1,sky:3,moon:0,command:[2,0,3,1,6],statu:[3,6],clip:3,built:[0,1],overhead:0,anoth:0,output:[3,6],iso:6,check_condit:3,update_logfil:3,dev:[2,0,3],order:0,kill:2,mention:3,temp:[0,3],ident:0,lot:0,create_mount:0,some:[0,1],post:1,dark_horizon:0,while_taking_test_imag:0,other:[0,3],"0x2adb9ed4d7f0":2,user:0,updat:3,ntc:3,easi:0,date:[0,3,1],is_cool:6,name:[2,0,3],daylight:1,ambient:[0,3],monitor:0,defin:[0,3,1],don:0,config_loc:5,reciev:3,time:[0,3,1,6],aagwar:3,arcsec:1,life:0,minimum:0,oper:[0,3],speed:[3,6],assum:[0,3],start_cool:6,"0x2adb9ed95630":1,header:0,actual:[2,0,1],unit:3,via:[3,1],loop:0,sun:0,duti:3,lat:[2,0],mount_info:0,close:3,noth:[0,6],been:0,simpli:[0,6],initialize_mount:1,debug:2,infinit:0,see:0,main:[2,0,6],also:[0,1,6],telemetri:3,subpackag:[],readon:0,natur:0,rs232_comms_v100:3,while_getting_readi:0,slew_to_coordin:1,serialdata:2,ani:1,rain_frequ:3,calcul:[0,3],second:1,downsid:0,chang:[0,1],index:[],rather:3,send:[2,3,1],while_sleep:0,coordin:1,sent:[0,3],arg:1,endang:0,get_error:3,"short":0,msg:2,decis:3,data:0,resend:0,includ:[0,1],move:0,unlik:3,within:[2,0],wind:3,heartbeat:0,confirm:6,"0x2b5f2ec24128":0,wind_speed_en:3,camera_info:0,numer:6,input:[1,6],everi:[],sleep:0,larg:0,ambient_temp:3,scienc:0,process:0,retri:0,serial_numb:6,from:[2,0,3,1,6],could:1,higher:0,analog3:3,around:3,presum:0,bad:[2,0],list_config:6,info:[2,0],those:0,load:2,down:0,start_sess:0,avoid:0,over:0,save:1,usual:0,create_weather_st:0,connect:[2,0,1,6],latest:3,invalidmountcommand:2,start_observ:0,self:[2,0,3,1,6],voltag:3,driver:0,period:[0,6],shutter:6,associ:6,control:[0,1],init:1,rs232_comms_v120:3,variabl:0,care:0,similar:0,"0x2adba2b79908":3,while_imag:0,schedul:0,sourc:[1,6,2,0,3,5],orient:1,model:[2,0,1,6],check_coordin:1,all:0,github:[0,5],perform:1,update_weath:3,hurt:3,signal:0,version:[3,1,6],ldr:3,except:2,method:[0,3,1,6],obstruct:0,compar:[0,1],solut:0,get_valu:3,iter:0,list:[3,6],reachabl:0,"class":[2,0,3,1,6],gain:0,take:[0,1],compon:0,applit:2,kwarg:[2,1],"0x2adb9e15eb00":2,simpl:3,serial:[1,6],finish:0,readlin:2,while_analyz:0,physic:0,set:[2,0,3,1,6],config:1,set_gmt_offset:1,get_serial_numb:6,"0x2adb9e1f1c50":6,contain:6,handl:0,whether:[0,3],turn:0,thrad:2,set_log_level:2,request:0,mani:0,can:[2,0,3,1,6],extra:0,vari:0,delai:[2,3],observatori:[],latitud:[0,1],set_long:1,dec:[2,1],solv:[0,1],attempt:[2,0,1],reset:[0,3],while_schedul:0,put:0,consid:0,specifi:2,fact:1,badserialconnect:2,"0x2b840b5be0f0":[],happen:0,have:[2,0,1,6],off:0,reason:[2,0],cycl:3,test:0,add:2,while_park:0,dictionari:6,threshold:0,"0x2adb9e1309e8":[],open:[3,1],program:[2,0,3],match:3,trigger:0,inform:[0,3],serial_address:3,per:1,setup_sit:[0,1],configur:[0,1],avail:1,kei:6,thei:0,todai:3,condit:[0,3],setup_command:1,hsb:3,sync_coordin:1,log_format:[2,0],doesn:2,analog0:3,lon:[2,0],integ:3,fals:[3,1],degre:3,read:[2,0,3,1],applic:0,page:[],project:[2,5],examin:6,univers:1,commun:[3,6],target:0,notfound:2,simple_capture_and_download:6,abstractcamera:6,chosen:0,ir_error:3,support:3,hope:0,absenc:1,stale:3,option:0,meaning:3,current:[0,1],slew_to_park:1,set_local_d:1,red:3,rain:3,shutdown:0,transit:0,situat:0,timer:6,thread:0,file:[2,0,3,5],initi:[0,1],full:3,"function":[2,0,1],step:0,string_command:1,part:0,correct:0,result:[0,3],ttyusb0:[2,0],pxxxx:3,occur:0,each:0,prepar:0,five:3,imagin:0,background:0,effici:0,might:0,sinc:0,techinfo:3,get_rain_frequ:3,max_tri:3,major:1,comput:0,store:0,serial_read:1,rel:0,which:[0,3,1,6],along:2,smallest:0,panopteslogg:[2,0],would:[0,1],exampl:0,start:0,exit:0,local:[2,0],read_aag_telemetri:3,doe:[0,3,1,6],dto:3,http:[0,3,5],ping:1,filenam:[2,3],intern:3,submodul:[],ha_to_dec:2,call:[0,1],discuss:0,valu:[2,3,6],cancel:0,serial_queri:1,get_switch:3,settl:0,properti:[3,1,6],abstractmount:1,specif:[0,3,1],deg:0,simul:[],give:3,limit:0,sync:1,warn:2,make:[0,3,1],respons:[2,3,1],get_shutter_count:6,"2nd":3,aag:3,wind_spe:3,decimal_hour:3,disk:0,okai:0,weather:[],"var":[2,0],tag:0,respect:3,log_dir:[2,0],levelnam:[2,0],dai:0,datetim:0,util:[1,6],probabl:0,won:3,count:6,readi:0,"0x2b840b627da0":[],device_vers:6,sure:[0,1],cannot:2,address:3,onli:[0,1],follow:0,timout:0,note:[2,0],rain_sensor_temp:3,text:3,goe:0,taken:[0,3],pre:1,wai:[0,1],bouc:0,third:0,understand:1,emerg:0,com:[0,5],again:[2,0],logic:0,signific:0,base:[2,0,3,1,6],"new":2,serial_writ:1,mountnotfound:2},envversion:43,filenames:["panoptes","panoptes.mount","panoptes.utils","panoptes.weather","modules","index","panoptes.camera"],objtypes:{"0":"py:module","1":"py:method","2":"py:function","3":"py:attribute","4":"py:exception","5":"py:class"},titles:["panoptes package","panoptes.mount package","panoptes.utils package","panoptes.weather package","panoptes","Welcome to POCS&#8217;s documentation!","panoptes.camera package"],objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","class","Python class"]}})