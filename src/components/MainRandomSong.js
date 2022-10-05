import React from 'react'
import {connect} from "react-redux"
import "../App.css"

const MainRandomSong = (props) => {
    const songs = props.songs

    /*****************************************ENGLISH*****************************************/

    /***ENGLISH ALT-GENRES*/

    const english60s=[]
    const english70s=[]
    const english80s=[]
    const english90s=[]
    const english00s=[]
    const english10s=[]
  
    
    /**********************/

    /********ENGLISH ROCK************/

    const english_psychedelicrock_rock=[]
    const english_progressiverock_rock=[]
    const english_alternativerock_rock=[]
    const english_artrock_rock=[]
    const english_hardrock_rock=[]
    const english_rockandroll=[]
    const english_emorock_rock=[]
    const english_punkrock_rock=[]
    const english_postpunkrock_rock=[]
    const english_anthemsrock_rock=[]
    const english_non_genre_rock=[]

   

    /********************************/

    /**********ENGLISH POP***************/
    const english_europop_pop=[]
    const english_teenpop_pop=[]
    const english_progressivepop_pop=[]
    const english_powerpop_pop=[]
    const english_psychedelicpop_pop=[]
    const english_dancepop_pop=[]
    const english_christianpop_pop=[]

    /************************************/

    /*************ENGLISH INDIE*************/

    const english_electronicindie_indie=[]
    const english_popindie_indie=[]
    const english_rockindie_indie=[]
    const english_hiphopindie_indie=[]
    const english_danceindie_indie=[]
    const english_rnbindie_indie=[]
    const english_folkindie_indie=[]

    /***************************************/

    /************ENGLISH HIP-HOP************/

    const english_oldschoolrap_hiphop=[]
    const english_trap_hiphop=[]
    const english_mumblerap_hiphop=[]
    const english_alternativerap_hiphop=[]
    const english_hardcorerap_hiphop=[]
    const english_westcoastrap_hiphop=[]
    const english_eastcoastrap_hiphop=[]
    const english_gangstarap_hiphop=[]
    const english_undergroundrap_hiphop=[]
    const english_rapoperarap_hiphop=[]
    const english_newschoolrap_hiphop=[]
    const english_anthemsrap_hiphop=[]

    /***************************************/

    /*****************ENGLISH METAL*********/

    const english_heavymetal_metal=[]
    const english_trashmetal_metal=[]
    const english_symphonicmetal_metal=[]
    const english_glammetal_metal=[]
    const english_blackmetal_metal=[]
    const english_deathmetal_metal=[]
    const english_industrialmetal_metal=[]
    const english_christianmetal_metal=[]
    const english_gothicmetal_metal=[]
    const english_doommetal_metal=[]
    const english_alternativemetal_metal=[]

    /***************************************/

    /*****************ENGLISH COUNTRY*******/
    const english_countryenglish=[]
    /***************************************/

    /*************ENGLISH R&B****************/
    const english_contemporaryrnb_rnb=[]
    const english_doowoprnb_rnb=[]
    const english_funkrnb_rnb=[]
    const english_soulrnb_rnb=[]
    const english_neosoulrnb_rnb=[]
    /****************************************/


    /*******************************************************************************************/


    /**************************************** TURKISH ********************************************/

    /**** TURKISH ALT-GENRES ***/

    const turkish60s=[]
    const turkish70s=[]
    const turkish80s=[]
    const turkish90s=[]
    const turkish00s=[]
    const turkish10s=[]

    /***************************/


    /************************ TURKISH POP ***************/

    const turkish_pop=[]

    /**************************************************/


    /******************* TURKISH ROCK *****************/

    const turkish_punkrock_rock=[]
    const turkish_anatolianrock_rock=[]
    const turkish_hardrock_rock=[]
    const turkish_anthemsrock_rock=[]

    /**************************************************/


    /**************** TURKISH RAP *********************/

    const turkish_battlerap_rap=[]
    const turkish_melancholiarap_rap=[]
    const turkish_oldschoolrap_rap=[]
    const turkish_trap_rap=[]
    const turkish_anthemsrap_rap=[]

    /**************************************************/


    /******************* TURKISH INDIE ****************/

    const turkish_popindie_indie=[]
    const turkish_rockindie_indie=[]
    const turkish_mixothersindie_indie=[]
    

    /**************************************************/

    /********************* TURKISH METAL **************/

    const turkish_metal=[]
    
    /**************************************************/


    /****************** TURKISH ART MUSIC  ************/

    const turkish_artmusic=[]

    /**************************************************/


  
    /****************** TURKISH FOLK MUSIC  ***********/
    
    const turkish_folkmusic=[]
    
    /**************************************************/

    /******************* TURKISH ARABESQUE MUSIC ******/

    const turkish_arabesquemusic=[]

    /**************************************************/


    /***************************************************************************************************/



    /******************************************* GERMAN ************************************************/

    /**************** GERMAN ALT-GENRES **************/

    const german60s=[]
    const german70s=[]
    const german80s=[]
    const german90s=[]
    const german00s=[]
    const german10s=[]


    /*************************************************/


    /************** GERMAN CLASSICAL MUSIC *****************/

    const german_classicalgerman=[]

    /*******************************************************/


    /***************** GERMAN FOLK MUSIC *******************/

    const german_folkmusic=[]

    /*******************************************************/   


    /********************* GERMAN POP **********************/

    const german_popmusic=[]

    /*******************************************************/


    /********************** GERMAN ROCK ********************/

    const german_neuedeutscheharterock_rock=[]
    const german_punkrock_rock=[]
    const german_ostrock_rock=[]
    const german_neuedeutschewellerock_rock=[]
    const german_progressiverock_rock=[]
    const german_gothicrock_rock=[]
    const german_krautrock_rock=[]
    const german_anthemsrock_rock=[]

    /*******************************************************/


    /************************ GERMAN INDIE *****************/

    const german_rockindie_indie=[]
    const german_popindie_indie=[]
    const german_indiemix_indie=[]

    /*******************************************************/


    /************************* GERMAN METAL ****************/

    const german_metal=[]

    /*******************************************************/


    /*********************** GERMAN RAP ********************/

    const german_hiphop=[]

    /*******************************************************/


    /************************ GERMAN ELECTRONİC ************/

    const german_electroclash_electronic=[]
    const german_trance_electronic=[]
    const german_schranz_electronic=[]
    const german_mixelectronic_electronic=[]

    /*******************************************************/


    /******************** GERMAN R&B ***********************/

    const german_rnb=[]
    
    /*******************************************************/


    /***************************************************************************************************/



    /*********************************************************** FRENCH ********************************/

        /*************** FRENCH ALT-GENRES *************/

        const french60s=[]
        const french70s=[]
        const french80s=[]
        const french90s=[]
        const french00s=[]
        const french10s=[]

        /***********************************************/


        /********************** CLASSICAL ************************/

        const french_classical=[]

        /*********************************************************/


        /*********************** FOLK ***************************/

        const french_folk=[]

        /********************************************************/


        /************************ HIPHOP ************************/

        const french_hiphop=[]

        /********************************************************/


        /***************************** POP **********************/

        const french_pop=[]

        /********************************************************/

        
        /**************************** ROCK *********************/

        const french_rock=[]

        /*******************************************************/


        /***************************** INDIE *******************/

        const french_indie=[]

        /*******************************************************/


        /***************************** ELECTRONIC *************/

        const french_electronic=[]

        /******************************************************/


        /******************** R&B *****************************/

        const french_rnb=[]
        
        /******************************************************/

    /***************************************************************************************************/


      /*********************************************************** RUSSIAN ********************************/

        /************ RUSSİAN ALT-GENRES ****/

        const russian60s=[]
        const russian70s=[]
        const russian80s=[]
        const russian90s=[]
        const russian00s=[]
        const russian10s=[]

        /************************************/

        /********************** CLASSICAL ************************/

        const russian_classical=[]

        /*********************************************************/


        /*********************** FOLK ***************************/

        const russian_folk=[]

        /********************************************************/


        /************************ HIPHOP ************************/

        const russian_hiphop=[]

        /********************************************************/


        /***************************** INDIE *******************/

        const russian_indie=[]

        /*******************************************************/


        /***************************** ELECTRONIC&TECHNO *************/

        const russian_electronic=[]

        /******************************************************/


        /******************** R&B *****************************/

        const russian_rnb=[]
        
        /******************************************************/

    /***************************************************************************************************/


    /********************* NORDIC ***************************/

    const nordic_nordicmusic=[]
     
    /********************************************************/


    function setSongsToGenreLists() {
        songs.forEach(song => {
            /************************* ENGLISH **************************/

            if (song.lang==="english"){

                /*****************ROCK**********************/

                if(song.genre==="progressiverock"){
                    english_progressiverock_rock.push(song)
                }
                else if (song.genre==="psychedelicrock"){
                    english_psychedelicrock_rock.push(song)
                }
                else if (song.genre==="alternativerock"){
                    english_alternativerock_rock.push(song)
                }
                else if (song.genre==="artrock"){
                    english_artrock_rock.push(song)
                }
                else if (song.genre==="hardrock"){
                    english_hardrock_rock.push(song)
                }
                else if (song.genre==="rockandroll"){
                    english_rockandroll.push(song)
                }
                else if (song.genre==="emorock"){
                    english_emorock_rock.push(song)
                }
                else if (song.genre==="punkrock"){
                    english_punkrock_rock.push(song)
                }
                else if (song.genre==="nongenrerock"){
                    english_non_genre_rock.push(song)
                }
                else if (song.genre==="postpunkrock"){
                    english_postpunkrock_rock.push(song)
                }

                /*****************************************/

                /********************POP******************/

                else if (song.genre==="europop"){
                    english_europop_pop.push(song)
                }
                else if (song.genre==="teenpop"){
                    english_teenpop_pop.push(song)
                }
                else if (song.genre==="progressivepop"){
                    english_progressivepop_pop.push(song)
                }
                else if (song.genre==="powerpop"){
                    english_powerpop_pop.push(song)
                }
                else if (song.genre==="psychedelicpop"){
                    english_psychedelicpop_pop.push(song)
                }
                else if (song.genre==="dancepop"){
                    english_dancepop_pop.push(song)
                }
                else if (song.genre==="christianpop"){
                    english_christianpop_pop.push(song)
                }

                /******************************************/

                /****************INDIE*********************/

                else if (song.genre==="electronicindie"){
                    english_electronicindie_indie.push(song)
                }
                else if (song.genre==="popindie"){
                    english_popindie_indie.push(song)
                }
                else if (song.genre==="rockindie"){
                    english_rockindie_indie.push(song)
                }
                else if (song.genre==="hiphopindie"){
                    english_hiphopindie_indie.push(song)
                }
                else if (song.genre==="danceindie"){
                    english_danceindie_indie.push(song)
                }
                else if (song.genre==="rnbindie"){
                    english_rnbindie_indie.push(song)
                }
                else if (song.genre==="folkindie"){
                    english_folkindie_indie.push(song)
                }

                /******************************************/

                /********************HİPHOP****************/

                else if (song.genre==="oldschoolrap"){
                    english_oldschoolrap_hiphop.push(song)
                }
                else if (song.genre==="trap"){
                    english_trap_hiphop.push(song)
                }
                else if (song.genre==="mumblerap"){
                    english_mumblerap_hiphop.push(song)
                }
                else if (song.genre==="alternativerap"){
                    english_alternativerap_hiphop.push(song)
                }
                else if (song.genre==="hardcorerap"){
                    english_hardcorerap_hiphop.push(song)
                }
                else if (song.genre==="westcoastrap"){
                    english_westcoastrap_hiphop.push(song)
                }
                else if (song.genre==="eastcoastrap"){
                    english_eastcoastrap_hiphop.push(song)
                }
                else if (song.genre==="gangstarap"){
                    english_gangstarap_hiphop.push(song)
                }
                else if (song.genre==="undergroundrap"){
                    english_undergroundrap_hiphop.push(song)
                }
                else if (song.genre==="rapoperarap"){
                    english_rapoperarap_hiphop.push(song)
                }
                else if (song.genre==="newschoolrap"){
                    english_newschoolrap_hiphop.push(song)
                }

                /*********************************************/

                /*******************METAL*********************/

                else if (song.genre==="heavymetal"){
                    english_heavymetal_metal.push(song)
                }
                else if (song.genre==="trashmetal"){
                    english_trashmetal_metal.push(song)
                }
                else if (song.genre==="symphonicmetal"){
                    english_symphonicmetal_metal.push(song)
                }
                else if (song.genre==="glammetal"){
                    english_glammetal_metal.push(song)
                }
                else if (song.genre==="blackmetal"){
                    english_blackmetal_metal.push(song)
                }
                else if (song.genre==="deathmetal"){
                    english_deathmetal_metal.push(song)
                }
                else if (song.genre==="industrialmetal"){
                    english_industrialmetal_metal.push(song)
                }
                else if (song.genre==="christianmetal"){
                    english_christianmetal_metal.push(song)
                }
                else if (song.genre==="gothicmetal"){
                    english_gothicmetal_metal.push(song)
                }
                else if (song.genre==="doommetal"){
                    english_doommetal_metal.push(song)
                }
                else if (song.genre==="alternativemetal"){
                    english_alternativemetal_metal.push(song)
                }

                /********************************************/

                /**********************R&B******************/

                else if (song.genre==="contemporaryrnb"){
                    english_contemporaryrnb_rnb.push(song)
                }
                else if (song.genre==="doowoprnb"){
                    english_doowoprnb_rnb.push(song)
                }
                else if (song.genre==="funkrnb"){
                    english_funkrnb_rnb.push(song)
                }
                else if (song.genre==="neosoulrnb"){
                    english_neosoulrnb_rnb.push(song)
                }
                else if (song.genre==="soulrnb"){
                    english_soulrnb_rnb.push(song)
                }

                /*********************************************/

                /***********************COUNTRY**************/

                else if (song.genre==="countryenglish"){
                    english_countryenglish.push(song)
                }
                
                /*******************************************/


                if(song.genre2==="progressiverock"){
                    english_progressiverock_rock.push(song)
                }
                else if (song.genre2==="psychedelicrock"){
                    english_psychedelicrock_rock.push(song)
                }
                else if (song.genre2==="alternativerock"){
                    english_alternativerock_rock.push(song)
                }
                else if (song.genre2==="artrock"){
                    english_artrock_rock.push(song)
                }
                else if (song.genre2==="hardrock"){
                    english_hardrock_rock.push(song)
                }
                else if (song.genre2==="rockandroll"){
                    english_rockandroll.push(song)
                }
                else if (song.genre2==="emorock"){
                    english_emorock_rock.push(song)
                }
                else if (song.genre2==="punkrock"){
                    english_punkrock_rock.push(song)
                }
                else if (song.genre2==="nongenrerock"){
                    english_non_genre_rock.push(song)
                }
                else if (song.genre2==="postpunkrock"){
                    english_postpunkrock_rock.push(song)
                }

                /*****************************************/

                /********************POP******************/

                else if (song.genre2==="europop"){
                    english_europop_pop.push(song)
                }
                else if (song.genre2==="teenpop"){
                    english_teenpop_pop.push(song)
                }
                else if (song.genre2==="progressivepop"){
                    english_progressivepop_pop.push(song)
                }
                else if (song.genre2==="powerpop"){
                    english_powerpop_pop.push(song)
                }
                else if (song.genre2==="psychedelicpop"){
                    english_psychedelicpop_pop.push(song)
                }
                else if (song.genre2==="dancepop"){
                    english_dancepop_pop.push(song)
                }
                else if (song.genre2==="christianpop"){
                    english_christianpop_pop.push(song)
                }

                /******************************************/

                /****************INDIE*********************/

                else if (song.genre2==="electronicindie"){
                    english_electronicindie_indie.push(song)
                }
                else if (song.genre2==="popindie"){
                    english_popindie_indie.push(song)
                }
                else if (song.genre2==="rockindie"){
                    english_rockindie_indie.push(song)
                }
                else if (song.genre2==="hiphopindie"){
                    english_hiphopindie_indie.push(song)
                }
                else if (song.genre2==="danceindie"){
                    english_danceindie_indie.push(song)
                }
                else if (song.genre2==="rnbindie"){
                    english_rnbindie_indie.push(song)
                }
                else if (song.genre2==="folkindie"){
                    english_folkindie_indie.push(song)
                }

                /******************************************/

                /********************HİPHOP****************/

                else if (song.genre2==="oldschoolrap"){
                    english_oldschoolrap_hiphop.push(song)
                }
                else if (song.genre2==="trap"){
                    english_trap_hiphop.push(song)
                }
                else if (song.genre2==="mumblerap"){
                    english_mumblerap_hiphop.push(song)
                }
                else if (song.genre2==="alternativerap"){
                    english_alternativerap_hiphop.push(song)
                }
                else if (song.genre2==="hardcorerap"){
                    english_hardcorerap_hiphop.push(song)
                }
                else if (song.genre2==="westcoastrap"){
                    english_westcoastrap_hiphop.push(song)
                }
                else if (song.genre2==="eastcoastrap"){
                    english_eastcoastrap_hiphop.push(song)
                }
                else if (song.genre2==="gangstarap"){
                    english_gangstarap_hiphop.push(song)
                }
                else if (song.genre2==="undergroundrap"){
                    english_undergroundrap_hiphop.push(song)
                }
                else if (song.genre2==="rapoperarap"){
                    english_rapoperarap_hiphop.push(song)
                }
                else if (song.genre2==="newschoolrap"){
                    english_newschoolrap_hiphop.push(song)
                }

                /*********************************************/

                /*******************METAL*********************/

                else if (song.genre2==="heavymetal"){
                    english_heavymetal_metal.push(song)
                }
                else if (song.genre2==="trashmetal"){
                    english_trashmetal_metal.push(song)
                }
                else if (song.genre2==="symphonicmetal"){
                    english_symphonicmetal_metal.push(song)
                }
                else if (song.genre2==="glammetal"){
                    english_glammetal_metal.push(song)
                }
                else if (song.genre2==="blackmetal"){
                    english_blackmetal_metal.push(song)
                }
                else if (song.genre2==="deathmetal"){
                    english_deathmetal_metal.push(song)
                }
                else if (song.genre2==="industrialmetal"){
                    english_industrialmetal_metal.push(song)
                }
                else if (song.genre2==="christianmetal"){
                    english_christianmetal_metal.push(song)
                }
                else if (song.genre2==="gothicmetal"){
                    english_gothicmetal_metal.push(song)
                }
                else if (song.genre2==="doommetal"){
                    english_doommetal_metal.push(song)
                }
                else if (song.genre2==="alternativemetal"){
                    english_alternativemetal_metal.push(song)
                }

                /********************************************/

                /**********************R&B******************/

                else if (song.genre2==="contemporaryrnb"){
                    english_contemporaryrnb_rnb.push(song)
                }
                else if (song.genre2==="doowoprnb"){
                    english_doowoprnb_rnb.push(song)
                }
                else if (song.genre2==="funkrnb"){
                    english_funkrnb_rnb.push(song)
                }
                else if (song.genre2==="neosoulrnb"){
                    english_neosoulrnb_rnb.push(song)
                }
                else if (song.genre2==="soulrnb"){
                    english_soulrnb_rnb.push(song)
                }

                /********************************************/

                /******************COUNTRY******************/

                else if (song.genre2==="countryenglish"){
                    english_countryenglish.push(song)
                }
                
                /*******************************************/

                if (song.genretoyear==="60s"){
                    english60s.push(song)
                }
                else if (song.genretoyear==="70s"){
                    english70s.push(song)
                }
                else if (song.genretoyear==="80s"){
                    english80s.push(song)
                }
                else if (song.genretoyear==="90s"){
                    english90s.push(song)
                }
                else if (song.genretoyear==="00s"){
                    english00s.push(song)
                }
                else if (song.genretoyear==="10s"){
                    english10s.push(song)
                }

                if (song.anthemrock==="correct"){
                    english_anthemsrock_rock.push(song)
                }

                if(song.anthemhiphop==="correct"){
                    english_anthemsrap_hiphop.push(song)
                }     
            }

            /**********************************************************************/

            else if(song.lang==="turkish"){

                /**************** ROCK *******************/

                if (song.genre==="anatolianrock"){
                    turkish_anatolianrock_rock.push(song)
                }
                else if (song.genre==="punkrock"){
                    turkish_punkrock_rock.push(song)
                }
                else if (song.genre==="hardrock"){
                    turkish_hardrock_rock.push(song)
                }

                /*******************************************/

                /******************* POP ******************/

                else if (song.genre==="pop"){
                    turkish_pop.push(song)
                }

                /******************************************/

                /********************* RAP ****************/

                else if (song.genre==="battlerap"){
                    turkish_battlerap_rap.push(song)
                }
                else if (song.genre==="melancholiarap"){
                    turkish_melancholiarap_rap.push(song)
                }
                else if (song.genre==="oldschoolrap"){
                    turkish_oldschoolrap_rap.push(song)
                }
                else if (song.genre==="trap"){
                    turkish_trap_rap.push(song)
                }

                /*******************************************/

                /******************** INDIE ****************/

                else if (song.genre==="rockindie"){
                    turkish_rockindie_indie.push(song)
                }
                else if (song.genre==="popindie"){
                    turkish_popindie_indie.push(song)
                }
                else if (song.genre==="mixindie"){
                    turkish_mixothersindie_indie.push(song)
                }

                /*******************************************/

                else if (song.genre==="metal"){
                    turkish_metal.push(song)
                }
                else if (song.genre==="artmusic"){
                    turkish_artmusic.push(song)
                }
                else if (song.genre==="folkmusic"){
                    turkish_folkmusic.push(song)
                }

                else if (song.genre==="arabesque"){
                    turkish_arabesquemusic.push(song)
                }

                /**************************************************************************************************/

                if (song.genre2==="anatolianrock"){
                    turkish_anatolianrock_rock.push(song)
                }
                else if (song.genre2==="punkrock"){
                    turkish_punkrock_rock.push(song)
                }
                else if (song.genre2==="hardrock"){
                    turkish_hardrock_rock.push(song)
                }

                /*******************************************/

                /******************* POP ******************/

                else if (song.genre2==="pop"){
                    turkish_pop.push(song)
                }

                /******************************************/

                /********************* RAP ****************/

                else if (song.genre2==="battlerap"){
                    turkish_battlerap_rap.push(song)
                }
                else if (song.genre2==="melancholiarap"){
                    turkish_melancholiarap_rap.push(song)
                }
                else if (song.genre2==="oldschoolrap"){
                    turkish_oldschoolrap_rap.push(song)
                }
                else if (song.genre2==="trap"){
                    turkish_trap_rap.push(song)
                }

                /*******************************************/

                /******************** INDIE ****************/

                else if (song.genre2==="rockindie"){
                    turkish_rockindie_indie.push(song)
                }
                else if (song.genre2==="popindie"){
                    turkish_popindie_indie.push(song)
                }
                else if (song.genre2==="mixindie"){
                    turkish_mixothersindie_indie.push(song)
                }

                /*******************************************/

                else if (song.genre2==="metal"){
                    turkish_metal.push(song)
                }
                else if (song.genre2==="artmusic"){
                    turkish_artmusic.push(song)
                }
                else if (song.genre2==="folkmusic"){
                    turkish_folkmusic.push(song)
                }


                /**********************************************************************************************************/

                if (song.genretoyear==="60s"){
                    turkish60s.push(song)
                }
                else if (song.genretoyear==="70s"){
                    turkish70s.push(song)
                }
                else if (song.genretoyear==="80s"){
                    turkish80s.push(song)
                }
                else if (song.genretoyear==="90s"){
                    turkish90s.push(song)
                }
                else if (song.genretoyear==="00s"){
                    turkish00s.push(song)
                }
                else if (song.genretoyear==="10s"){
                    turkish10s.push(song)
                }

                if (song.anthemrock==="true"){
                    turkish_anthemsrock_rock.push(song)
                }

                if (song.anthemhiphop==="true"){
                    turkish_anthemsrap_rap.push(song)
                }
                
            }

            /************************************************ GERMAN **************************************************/

            else if (song.lang==="german"){
                if(song.genre==="classicalgerman"){
                    german_classicalgerman.push(song)
                }
                else if (song.genre==="pop"){
                    german_popmusic.push(song)
                }

                else if (song.genre==="folk"){
                    german_folkmusic.push(song)
                }

                /********************** ROCK *******************************/

                else if (song.genre==="neuedeutscheharterock"){
                    german_neuedeutscheharterock_rock.push(song)
                }
                else if (song.genre==="ostrock"){
                    german_ostrock_rock.push(song)
                }
                else if (song.genre==="neuedeutschewellerock"){
                    german_neuedeutschewellerock_rock.push(song)
                }
                else if (song.genre==="progressiverock"){
                    german_progressiverock_rock.push(song)
                }
                else if (song.genre==="punkrock"){
                    german_punkrock_rock.push(song)
                }
                else if (song.genre==="gothicrock"){
                    german_gothicrock_rock.push(song)
                }
                else if (song.genre==="krautrock"){
                    german_krautrock_rock.push(song)
                }

                /**************************************************************/

                /****************************** INDIE *************/

                else if (song.genre==="rockindie"){
                    german_rockindie_indie.push(song)
                }
                else if (song.genre==="popindie"){
                    german_popindie_indie.push(song)
                }
                else if (song.genre==="mixindie"){
                    german_indiemix_indie.push(song)
                }


                /**************************************************/
                else if (song.genre==="metal"){
                    german_metal.push(song)
                }

                /*************************************************/

                else if (song.genre==="rap"){
                    german_hiphop.push(song)
                }

                /*************************************************/

                /**************** ELECTRONIC *********************/

                else if (song.genre==="electroclash"){
                    german_electroclash_electronic.push(song)
                }
                else if (song.genre==="trance"){
                    german_trance_electronic.push(song)
                }
                else if (song.genre==="schranz"){
                    german_schranz_electronic.push(song)
                }
                else if (song.genre==="mixelectronic"){
                    german_mixelectronic_electronic.push(song)
                }

                /**************************************************/
                else if (song.genre==="rnb"){
                    german_rnb.push(song)
                }

                /*******************************************************************************************************************/

                if(song.genre2==="classicalgerman"){
                    german_classicalgerman.push(song)
                }
                else if (song.genre2==="pop"){
                    german_popmusic.push(song)
                }

                /********************** ROCK *******************************/

                else if (song.genre2==="neuedeutscheharterock"){
                    german_neuedeutscheharterock_rock.push(song)
                }
                else if (song.genre2==="ostrock"){
                    german_ostrock_rock.push(song)
                }
                else if (song.genre2==="neuedeutschewellerock"){
                    german_neuedeutschewellerock_rock.push(song)
                }
                else if (song.genre2==="progressiverock"){
                    german_progressiverock_rock.push(song)
                }
                else if (song.genre2==="punkrock"){
                    german_punkrock_rock.push(song)
                }
                else if (song.genre2==="gothicrock"){
                    german_gothicrock_rock.push(song)
                }
                else if (song.genre2==="krautrock"){
                    german_krautrock_rock.push(song)
                }

                /**************************************************************/

                /****************************** INDIE *************/

                else if (song.genre2==="rockindie"){
                    german_rockindie_indie.push(song)
                }
                else if (song.genre2==="popindie"){
                    german_popindie_indie.push(song)
                }
                else if (song.genre2==="mixindie"){
                    german_indiemix_indie.push(song)
                }


                /**************************************************/
                else if (song.genre2==="metal"){
                    german_metal.push(song)
                }

                /*************************************************/

                else if (song.genre2==="rap"){
                    german_hiphop.push(song)
                }

                /*************************************************/

                /**************** ELECTRONIC *********************/

                else if (song.genre2==="electroclash"){
                    german_electroclash_electronic.push(song)
                }
                else if (song.genre2==="trance"){
                    german_trance_electronic.push(song)
                }
                else if (song.genre2==="schranz"){
                    german_schranz_electronic.push(song)
                }
                else if (song.genre2==="mixelectronic"){
                    german_mixelectronic_electronic.push(song)
                }

                else if (song.genre2==="rnb"){
                    german_rnb.push(song)
                }

                /******************** ALT GENRES ******************/

                if (song.genretoyear==="60s"){
                    german60s.push(song)
                }
                else if (song.genretoyear==="70s"){
                    german70s.push(song)
                }
                else if (song.genretoyear==="80s"){
                    german80s.push(song)
                }
                else if (song.genretoyear==="90s"){
                    german90s.push(song)
                }
                else if (song.genretoyear==="00s"){
                    german00s.push(song)
                }
                else if (song.genretoyear==="10s"){
                    german10s.push(song)
                }
                /**************************************************/


                if(song.anthemrock==="true"){
                    german_anthemsrock_rock.push(song)
                }
                
            }
            /*************************************************************************************************************/

            else if(song.lang==="nordic"){
                if(song.genre==="nordicmusic"){
                    nordic_nordicmusic.push(song)
                }
            }

            /*************************************************************************************************************/


            /******************************************** FRENCH *********************************************************/
            
            else if (song.lang==="french"){
                /*************************************/

                if(song.genre==="classical"){
                    french_classical.push(song)
                }
                else if(song.genre==="folk"){
                    french_folk.push(song)
                }
                else if(song.genre==="hiphop"){
                    french_hiphop.push(song)
                }
                else if(song.genre==="indie"){
                    french_indie.push(song)
                }
                else if(song.genre==="rnb"){
                    french_rnb.push(song)
                }
                else if(song.genre==="rock"){
                    french_rock.push(song)
                }
                else if(song.genre==="pop"){
                    french_pop.push(song)
                }
                else if(song.genre==="electronic"){
                    french_electronic.push(song)
                }

                /*************************************/

                if (song.genretoyear==="60s"){
                    french60s.push(song)
                }
                else if (song.genretoyear==="70s"){
                    french70s.push(song)
                }
                else if (song.genretoyear==="80s"){
                    french80s.push(song)
                }
                else if (song.genretoyear==="90s"){
                    french90s.push(song)
                }
                else if (song.genretoyear==="00s"){
                    french00s.push(song)
                }
                else if (song.genretoyear==="10s"){
                    french10s.push(song)
                }

                /*************************************/


            }

            
            /*************************************************************************************************************/


            /********************************************* RUSSIAN ********************************************************/

            else if(song.lang==="russian"){

                /********************************/

                if(song.genre==="folk"){
                    russian_folk.push(song)
                }
                else if (song.genre==="classical"){
                    russian_classical.push(song)
                }
                else if (song.genre==="electronic"){
                    russian_electronic.push(song)
                }
                else if (song.genre==="hiphop"){
                    russian_hiphop.push(song)
                }
                else if (song.genre==="indie"){
                    russian_indie.push(song)
                }
                else if (song.genre==="rnb"){
                    russian_rnb.push(song)
                }
                
                /*********************************/

                if (song.genretoyear==="60s"){
                    russian60s.push(song)
                }
                else if(song.genretoyear==="70s"){
                    russian70s.push(song)
                }
                else if(song.genretoyear==="80s"){
                    russian80s.push(song)
                }
                else if(song.genretoyear==="90s"){
                    russian90s.push(song)
                }
                else if(song.genretoyear==="00s"){
                    russian00s.push(song)
                }
                else if(song.genretoyear==="10s"){
                    russian10s.push(song)
                }

                /*********************************/
                
            }

            /**************************************************************************************************************/
            
        });
        
    }

    setSongsToGenreLists()


    /************************************ LANGUAGE LİSTS *****************/

    const allsongs=[]
    function setSongsToAllsongsList() {
        songs.forEach(song => {
            allsongs.push(song)
        });
    }
    setSongsToAllsongsList()
    const english_songs=[]
    const french_songs=[]
    const german_songs=[]
    const russian_songs=[]
    const turkish_songs=[]

    function setSongsToLangLists() {
        songs.forEach(song => {
            if (song.lang==="english"){
                english_songs.push(song)
            }

            else if (song.lang==="french"){
                french_songs.push(song)
            }

            else if (song.lang==="german"){
                german_songs.push(song)
            }
            else if (song.lang==="russian"){
                russian_songs.push(song)
            }
            else if (song.lang==="turkish"){
                turkish_songs.push(song)
            }
        });
    }

    setSongsToLangLists()

    /*********************************************************************/


    /************************************ TYPE LİSTS ********************/

        /************ ENGLISH TYPES *****/

        const english_rock=[]
        const english_pop=[]
        const english_indie=[]
        const english_hiphop=[]
        const english_metal=[]
        const english_rnb=[]
        const english_nostalgy=[]

        /*********************************/
        /************ FRENCH TYPES *****/
        const french_nostalgy=[]
        /*********************************/
        /************ GERMAN TYPES *****/

        const german_nostalgy=[]
        const german_rock=[]
        const german_indie=[]
        const german_electronic=[]

        /*********************************/
        /************ TURKISH TYPES *****/
        const turkish_nostalgy=[]
        const turkish_rock=[]
        const turkish_hiphop=[]
        const turkish_indie=[]
        /*********************************/

        /************ RUSSIAN TYPES *****/
        const russian_nostalgy=[]
        /*********************************/
        function setSongsToTypeLists() {
            songs.forEach(song => {
                if(song.lang==="english"){
                    if(song.type==="rock"){
                        english_rock.push(song)
                    }
                    else if(song.type==="pop"){
                        english_pop.push(song)
                    }
                    else if(song.type==="indie"){
                        english_indie.push(song)
                    }
                    else if(song.type==="hiphop"){
                        english_hiphop.push(song)
                    }
                    else if(song.type==="metal"){
                        english_metal.push(song)
                    }
                    else if(song.type==="rnb"){
                        english_rnb.push(song)
                    }
                    else if(song.type==="nostalgy"){
                        english_nostalgy.push(song)
                    }
                }
    
                else if (song.lang==="turkish"){
                    if(song.type==="rock"){
                        turkish_rock.push(song)
                    }
                    else if (song.type==="hiphop"){
                        turkish_hiphop.push(song)
                    }
                    else if (song.type==="indie"){
                        turkish_indie.push(song)
                    }
                    else if (song.type==="nostalgy"){
                        turkish_nostalgy.push(song)
                    }
                }

                else if (song.lang==="french"){
                    if(song.type==="nostalgy"){
                        french_nostalgy.push(song)
                    }
                }
                
                else if (song.lang==="russian"){
                    if(song.type==="nostalgy"){
                        russian_nostalgy.push(song)
                    }
                }

                else if (song.lang==="german"){
                    if(song.type==="nostalgy"){
                        german_nostalgy.push(song)
                    }
                    else if(song.type==="rock"){
                        german_rock.push(song)
                    }
                    else if(song.type==="indie"){
                        german_indie.push(song)
                    }
                    else if(song.type==="electronic"){
                        german_electronic.push(song)
                    }
                }
    
    
            });
        }
        setSongsToTypeLists()

    /*********************************************************************/



    function eventfunction1(e){
        if(e.target.value==="english"){

            const turkishgenres=document.getElementById("turkishgenres")
            turkishgenres.style.display="none"

            const englishgenres=document.getElementById("englishgenres")
            englishgenres.style.display="inline-block"
        }
        else if(e.target.value==="turkish"){

            const englishgenres=document.getElementById("englishgenres")
            englishgenres.style.display="none"

            const turkishgenres=document.getElementById("turkishgenres")
            turkishgenres.style.display="inline-block"
        }

    }
    
    const jsx_language_selector=

    <select style={{margin:"10px",display:"inline-block",marginRight:"20px"}} onChange={eventfunction1}>
        <option defaultValue>Choose language</option>
        <option value="english">English</option>
        <option value="turkish">Turkish</option>
        <option value="german">German</option>
        <option value="french">French</option>
        <option value="russian">Russian</option>
        <option value="nordic">Nordic</option>
    </select>

/************************************ ENGLISH GENRES *****************************************/

    function eventfunction2(e) {

    /************************************************* ENGLISH ***********************************/    

        if (e.target.value==="rockenglish"){

            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")
            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"

            const english_rock_genres=document.getElementById("englishrockgenres")
            english_rock_genres.style.margin="10px"
            english_rock_genres.style.display="inline-block"
        }
        else if (e.target.value==="popenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"

            const english_pop_genres=document.getElementById("englishpopgenres")
            english_pop_genres.style.display="inline-block"
            english_pop_genres.style.margin="10px"
        }
        else if (e.target.value==="indieenglish"){
            
            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")
            english_pop_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"

            const english_indie_genres=document.getElementById("englishindiegenres")
            english_indie_genres.style.display="inline-block"
            english_indie_genres.style.margin="10px"
        }
        else if (e.target.value==="metalenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")
            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"

            const english_metal_genres=document.getElementById("englishmetalgenres")
            english_metal_genres.style.display="inline-block"
            english_metal_genres.style.margin="10px"
        }
        else if (e.target.value==="hiphopenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")
            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"

            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            english_hiphop_genres.style.display="inline-block"
            english_hiphop_genres.style.margin="10px"
        }
        else if (e.target.value==="countryenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")

            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"

            const iframe=document.getElementById("iframe")
            iframe.src=english_psychedelicrock_rock[1].youtube
            iframe.style.display="none"
        }
        else if (e.target.value==="rnbenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")

            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"

            const english_rnb_genres=document.getElementById("englishrnbgenres")
            english_rnb_genres.style.display="inline-block"
            english_rnb_genres.style.margin="10px"
        }
        else if (e.target.value==="genretoyearenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")

            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rock_genres.style.display="none"
            english_rnb_genres.style.display="none"
            
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")
            english_nostalgy_genres.style.display="inline-block"
            english_nostalgy_genres.style.margin="10px"
        }
        else if (e.target.value==="allenglish"){

            const english_rock_genres=document.getElementById("englishrockgenres")
            const english_pop_genres=document.getElementById("englishpopgenres")
            const english_indie_genres=document.getElementById("englishindiegenres")
            const english_metal_genres=document.getElementById("englishmetalgenres")
            const english_hiphop_genres=document.getElementById("englishhiphopgenres")
            const english_rnb_genres=document.getElementById("englishrnbgenres")
            const english_nostalgy_genres=document.getElementById("englishnostalgygenres")

            english_pop_genres.style.display="none"
            english_indie_genres.style.display="none"
            english_metal_genres.style.display="none"
            english_hiphop_genres.style.display="none"
            english_rnb_genres.style.display="none"
            english_nostalgy_genres.style.display="none"
            english_rock_genres.style.display="none"


            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_songs[Math.floor(Math.random()*english_songs.length)]
            const randomsong1=english_songs[Math.floor(Math.random()*english_songs.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

    /*******************************************************************************************************/


    /************************************************************** TURKISH ********************************/

    if(e.target.value==="rockturkish"){
        const turkish_rock_genres=document.getElementById("turkishrockgenres")

    }

    else if (e.target.value==="genretoyearturkish"){
        const turkish_nostalgy_genres=document.getElementById("turkishnostalgygenres")
        turkish_nostalgy_genres.style.display="inline-block"
        turkish_nostalgy_genres.style.margin="10px"
    }

    /*******************************************************************************************************/
   
    }

    const jsx_english_genre_selector= 

    <select style={{margin:"10px"}} onChange={eventfunction2} id="englishgenres" style={{display:"none",marginRight:"10px"}}>
        <option defaultValue>Choose type</option>
        <option value="genretoyearenglish">Nostalgy</option>
        <option value="rockenglish">Rock</option>
        <option value="popenglish">Pop</option>
        <option value="metalenglish">Metal</option>
        <option value="countryenglish">Country</option>
        <option value="rnbenglish">R&B</option>
        <option value="indieenglish">Indie</option>
        <option value="hiphopenglish">Hip hop</option>
        <option value="allenglish">Mix</option>
    </select>


    const jsx_turkish_genre_selector= 
    <select style={{margin:"10px"}} onChange={eventfunction2} id="turkishgenres" style={{display:"none",marginRight:"10px"}}>
        <option defaultValue>Choose type</option>
        <option value="genretoyearturkish">Nostalgy</option>
        <option value="rockturkish">Rock</option>
        <option value="popturkish">Pop</option>
        <option value="metalturkish">Metal</option>
        <option value="folkturkish">Folk</option>
        <option value="artturkish">Art</option>
        <option value="indieturkish">Indie</option>
        <option value="hiphopturkish">Hip hop</option>
        <option value="arabesque">Arabesque</option>
        <option value="allturkish">Mix</option>
    </select>

    function eventfunction3(e) {

        /***************************** ENGLISH ROCK ************************************************/

        if(e.target.value==="progressiverockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_psychedelicrock_rock[Math.floor(Math.random()*english_psychedelicrock_rock.length)]
            const randomsong1=english_psychedelicrock_rock[Math.floor(Math.random()*english_psychedelicrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
  
        }
        else if (e.target.value==="psychedelicrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_psychedelicrock_rock[Math.floor(Math.random()*english_psychedelicrock_rock.length)]
            const randomsong1=english_psychedelicrock_rock[Math.floor(Math.random()*english_psychedelicrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="alternativerockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_alternativerock_rock[Math.floor(Math.random()*english_alternativerock_rock.length)]
            const randomsong1=english_alternativerock_rock[Math.floor(Math.random()*english_alternativerock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="artrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_artrock_rock[Math.floor(Math.random()*english_artrock_rock.length)]
            const randomsong1=english_artrock_rock[Math.floor(Math.random()*english_artrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="hardrockrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_hardrock_rock[Math.floor(Math.random()*english_hardrock_rock.length)]
            const randomsong1=english_hardrock_rock[Math.floor(Math.random()*english_hardrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="rockandrollrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_rockandroll[Math.floor(Math.random()*english_rockandroll.length)]
            const randomsong1=english_rockandroll[Math.floor(Math.random()*english_rockandroll.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="emorockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_emorock_rock[Math.floor(Math.random()*english_emorock_rock.length)]
            const randomsong1=english_emorock_rock[Math.floor(Math.random()*english_emorock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="punkrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_punkrock_rock[Math.floor(Math.random()*english_punkrock_rock.length)]
            const randomsong1=english_punkrock_rock[Math.floor(Math.random()*english_punkrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="postpunkrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_postpunkrock_rock[Math.floor(Math.random()*english_postpunkrock_rock.length)]
            const randomsong1=english_postpunkrock_rock[Math.floor(Math.random()*english_postpunkrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="rockanthemsenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_anthemsrock_rock[Math.floor(Math.random()*english_anthemsrock_rock.length)]
            const randomsong1=english_anthemsrock_rock[Math.floor(Math.random()*english_anthemsrock_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }    
        else if (e.target.value==="allrockenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_rock[Math.floor(Math.random()*english_rock.length)]
            const randomsong1=english_rock[Math.floor(Math.random()*english_rock.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

        /***********************************************************************************************/

        /********************************* ENGLISH POP *************************************************/

        else if (e.target.value==="europopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_europop_pop[Math.floor(Math.random()*english_europop_pop.length)]
            const randomsong1=english_europop_pop[Math.floor(Math.random()*english_europop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="teenpopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_teenpop_pop[Math.floor(Math.random()*english_teenpop_pop.length)]
            const randomsong1=english_teenpop_pop[Math.floor(Math.random()*english_teenpop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="progressivepopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_progressivepop_pop[Math.floor(Math.random()*english_progressivepop_pop.length)]
            const randomsong1=english_progressivepop_pop[Math.floor(Math.random()*english_progressivepop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="powerpopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_powerpop_pop[Math.floor(Math.random()*english_powerpop_pop.length)]
            const randomsong1=english_powerpop_pop[Math.floor(Math.random()*english_powerpop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="psychedelicpopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_psychedelicpop_pop[Math.floor(Math.random()*english_psychedelicpop_pop.length)]
            const randomsong1=english_psychedelicpop_pop[Math.floor(Math.random()*english_psychedelicpop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="dancepopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_dancepop_pop[Math.floor(Math.random()*english_dancepop_pop.length)]
            const randomsong1=english_dancepop_pop[Math.floor(Math.random()*english_dancepop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="christianpopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_christianpop_pop[Math.floor(Math.random()*english_christianpop_pop.length)]
            const randomsong1=english_christianpop_pop[Math.floor(Math.random()*english_christianpop_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="allpopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_pop[Math.floor(Math.random()*english_pop.length)]
            const randomsong1=english_pop[Math.floor(Math.random()*english_pop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

        /*******************************************************************************************/

        /****************************************** ENGLISH INDIE **********************************/

        else if (e.target.value==="electronicindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_electronicindie_indie[Math.floor(Math.random()*english_electronicindie_indie.length)]
            const randomsong1=english_electronicindie_indie[Math.floor(Math.random()*english_electronicindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="popindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_popindie_indie[Math.floor(Math.random()*english_popindie_indie.length)]
            const randomsong1=english_popindie_indie[Math.floor(Math.random()*english_popindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="rockindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_rockindie_indie[Math.floor(Math.random()*english_rockindie_indie.length)]
            const randomsong1=english_rockindie_indie[Math.floor(Math.random()*english_rockindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="hiphopindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_hiphopindie_indie[Math.floor(Math.random()*english_hiphopindie_indie.length)]
            const randomsong1=english_hiphopindie_indie[Math.floor(Math.random()*english_hiphopindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="danceindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_danceindie_indie[Math.floor(Math.random()*english_danceindie_indie.length)]
            const randomsong1=english_danceindie_indie[Math.floor(Math.random()*english_danceindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="rnbindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_rnbindie_indie[Math.floor(Math.random()*english_rnbindie_indie.length)]
            const randomsong1=english_rnbindie_indie[Math.floor(Math.random()*english_rnbindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="folkindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_folkindie_indie[Math.floor(Math.random()*english_folkindie_indie.length)]
            const randomsong1=english_folkindie_indie[Math.floor(Math.random()*english_folkindie_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="allindieenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_indie[Math.floor(Math.random()*english_indie.length)]
            const randomsong1=english_indie[Math.floor(Math.random()*english_indie.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

        /*******************************************************************************************/

        /********************************* ENGLISH HIPHOP **********************************************/
        else if (e.target.value==="oldschoolhiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_oldschoolrap_hiphop[Math.floor(Math.random()*english_oldschoolrap_hiphop.length)]
            const randomsong1=english_oldschoolrap_hiphop[Math.floor(Math.random()*english_oldschoolrap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="traphiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_trap_hiphop[Math.floor(Math.random()*english_trap_hiphop.length)]
            const randomsong1=english_trap_hiphop[Math.floor(Math.random()*english_trap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="mumblehiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_mumblerap_hiphop[Math.floor(Math.random()*english_mumblerap_hiphop.length)]
            const randomsong1=english_mumblerap_hiphop[Math.floor(Math.random()*english_mumblerap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="alternativehiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_alternativerap_hiphop[Math.floor(Math.random()*english_alternativerap_hiphop.length)]
            const randomsong1=english_alternativerap_hiphop[Math.floor(Math.random()*english_alternativerap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="hardcorehiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_hardcorerap_hiphop[Math.floor(Math.random()*english_hardcorerap_hiphop.length)]
            const randomsong1=english_hardcorerap_hiphop[Math.floor(Math.random()*english_hardcorerap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="westcoasthiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_westcoastrap_hiphop[Math.floor(Math.random()*english_westcoastrap_hiphop.length)]
            const randomsong1=english_westcoastrap_hiphop[Math.floor(Math.random()*english_westcoastrap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="eastcoasthiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_eastcoastrap_hiphop[Math.floor(Math.random()*english_eastcoastrap_hiphop.length)]
            const randomsong1=english_eastcoastrap_hiphop[Math.floor(Math.random()*english_eastcoastrap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="gangstahiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_gangstarap_hiphop[Math.floor(Math.random()*english_gangstarap_hiphop.length)]
            const randomsong1=english_gangstarap_hiphop[Math.floor(Math.random()*english_gangstarap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="undergroundhiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_undergroundrap_hiphop[Math.floor(Math.random()*english_undergroundrap_hiphop.length)]
            const randomsong1=english_undergroundrap_hiphop[Math.floor(Math.random()*english_undergroundrap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="rapoperahiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_rapoperarap_hiphop[Math.floor(Math.random()*english_rapoperarap_hiphop.length)]
            const randomsong1=english_rapoperarap_hiphop[Math.floor(Math.random()*english_rapoperarap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="newschoolhiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_newschoolrap_hiphop[Math.floor(Math.random()*english_newschoolrap_hiphop.length)]
            const randomsong1=english_newschoolrap_hiphop[Math.floor(Math.random()*english_newschoolrap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="anthemshiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_anthemsrap_hiphop[Math.floor(Math.random()*english_anthemsrap_hiphop.length)]
            const randomsong1=english_anthemsrap_hiphop[Math.floor(Math.random()*english_anthemsrap_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="allhiphopenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_hiphop[Math.floor(Math.random()*english_hiphop.length)]
            const randomsong1=english_hiphop[Math.floor(Math.random()*english_hiphop.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

        /***********************************************************************************************/

        /******************************** ENGLISH METAL ************************************************/

        else if (e.target.value==="heavymetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_heavymetal_metal[Math.floor(Math.random()*english_heavymetal_metal.length)]
            const randomsong1=english_heavymetal_metal[Math.floor(Math.random()*english_heavymetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="trashmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_trashmetal_metal[Math.floor(Math.random()*english_trashmetal_metal.length)]
            const randomsong1=english_trashmetal_metal[Math.floor(Math.random()*english_trashmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="symphonicmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_symphonicmetal_metal[Math.floor(Math.random()*english_symphonicmetal_metal.length)]
            const randomsong1=english_symphonicmetal_metal[Math.floor(Math.random()*english_symphonicmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="glammetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_glammetal_metal[Math.floor(Math.random()*english_glammetal_metal.length)]
            const randomsong1=english_glammetal_metal[Math.floor(Math.random()*english_glammetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="blackmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_blackmetal_metal[Math.floor(Math.random()*english_blackmetal_metal.length)]
            const randomsong1=english_blackmetal_metal[Math.floor(Math.random()*english_blackmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="deathmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_deathmetal_metal[Math.floor(Math.random()*english_deathmetal_metal.length)]
            const randomsong1=english_deathmetal_metal[Math.floor(Math.random()*english_deathmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="industrialmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_industrialmetal_metal[Math.floor(Math.random()*english_industrialmetal_metal.length)]
            const randomsong1=english_industrialmetal_metal[Math.floor(Math.random()*english_industrialmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="christianmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_christianmetal_metal[Math.floor(Math.random()*english_christianmetal_metal.length)]
            const randomsong1=english_christianmetal_metal[Math.floor(Math.random()*english_christianmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="gothicmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_gothicmetal_metal[Math.floor(Math.random()*english_gothicmetal_metal.length)]
            const randomsong1=english_gothicmetal_metal[Math.floor(Math.random()*english_gothicmetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="doommetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_doommetal_metal[Math.floor(Math.random()*english_doommetal_metal.length)]
            const randomsong1=english_doommetal_metal[Math.floor(Math.random()*english_doommetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="alternativemetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_alternativemetal_metal[Math.floor(Math.random()*english_alternativemetal_metal.length)]
            const randomsong1=english_alternativemetal_metal[Math.floor(Math.random()*english_alternativemetal_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="allmetalenglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english_metal[Math.floor(Math.random()*english_metal.length)]
            const randomsong1=english_metal[Math.floor(Math.random()*english_metal.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

        /***********************************************************************************************/

        /*************************************** NOSTALGY **********************************************/

        else if (e.target.value==="60senglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english60s[Math.floor(Math.random()*english60s.length)]
            const randomsong1=english60s[Math.floor(Math.random()*english60s.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="70senglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english70s[Math.floor(Math.random()*english70s.length)]
            const randomsong1=english70s[Math.floor(Math.random()*english70s.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="80senglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english80s[Math.floor(Math.random()*english80s.length)]
            const randomsong1=english80s[Math.floor(Math.random()*english80s.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="90senglish"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english90s[Math.floor(Math.random()*english90s.length)]
            const randomsong1=english90s[Math.floor(Math.random()*english90s.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="00english"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english00s[Math.floor(Math.random()*english00s.length)]
            const randomsong1=english00s[Math.floor(Math.random()*english00s.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }
        else if (e.target.value==="10english"){
            const mainsongyoutubeiframe=document.getElementById("mainsongyoutubeiframe")
            const mainsongspotifyiframe=document.getElementById("mainsongspotifyiframe")
            const relatedsongsiframe1=document.getElementById("relatedsongsiframe1")
            const relatedsongsiframe2=document.getElementById("relatedsongsiframe2")
            const relatedplaylist=document.getElementById("relatedplaylist")
            const randomsong=english10s[Math.floor(Math.random()*english10s.length)]
            const randomsong1=english10s[Math.floor(Math.random()*english10s.length)]
            mainsongyoutubeiframe.src=randomsong.youtube
            mainsongspotifyiframe.src=randomsong.spotify
            relatedsongsiframe1.src=randomsong1.spotify
            relatedsongsiframe2.src=randomsong1.spotify
            relatedplaylist.src=randomsong1.spotify
            const iframediv=document.getElementById("iframesdivid")
            iframediv.style.display="none"
        }

        
        /***********************************************************************************************/
    }



    /***************************************************************** TURKISH SELECTORS ********************************/

    const jsx_english_rock_selector=

    <select onChange={eventfunction3} style={{display:"none"}} id="englishrockgenres">

        <option defaultValue>Choose genre</option>
        <option value="psychedelicrockenglish">Psychedelic</option>
        <option value="progressiverockenglish">Progressive</option>
        <option value="alternativerockenglish">Alternative</option>
        <option value="artrockenglish">Art</option>
        <option value="hardrockrockenglish">Hardrock</option>
        <option value="rockandrollrockenglish">Rock and Roll</option>
        <option value="emorockenglish">Emo</option>
        <option value="punkrockenglish">Punk</option>
        <option value="postpunkrockenglish">Post-punk</option>
        <option value="rockanthemsenglish">Rock Anthems</option>
        <option value="allrockenglish">Mix</option>
        
    </select>



    const jsx_english_pop_selector=

    <select onChange={eventfunction3} style={{display:"none"}} id="englishpopgenres">
        <option defaultValue>Choose genre</option>
        <option value="europopenglish">Europop</option>
        <option value="teenpopenglish">Teen</option>
        <option value="progressivepopenglish">Progressive</option>
        <option value="powerpopenglish">Power</option>
        <option value="psychedelicpopenglish">Psychedelic</option>
        <option value="dancepopenglish">Dance</option>
        <option value="christianpopenglish">Christian</option>
        <option value="allpopenglish">Mix</option>
    </select>   

    const jsx_english_indie_selector=

    <select onChange={eventfunction3} style={{display:"none",marginRight:"10px"}} id="englishindiegenres">
        <option defaultValue>Choose genre</option>
        <option value="electronicindieenglish">Electronic</option>
        <option value="popindieenglish">Pop</option>
        <option value="rockindieenglish">Rock</option>
        <option value="hiphopindieenglish">Hip Hop</option>
        <option value="danceindieenglish">Dance</option>
        <option value="rnbindieenglish">R&B</option>
        <option value="folkindieenglish">Folk</option>
        <option value="allindieenglish">Mix</option>
    </select> 

    const jsx_english_hiphop_selector=

    <select onChange={eventfunction3} style={{display:"none"}} id="englishhiphopgenres">
        <option defaultValue>Choose genre</option>
        <option value="oldschoolhiphopenglish">Old School</option>
        <option value="traphiphopenglish">Trap</option>
        <option value="mumblehiphopenglish">Mumble Rap</option>
        <option value="alternativehiphopenglish">Alternative</option>
        <option value="hardcorehiphopenglish">Hardcore</option>
        <option value="westcoasthiphopenglish">Westcoast</option>
        <option value="eastcoasthiphopenglish">Eastcoast</option>
        <option value="gangstahiphopenglish">Gangsta</option>
        <option value="undergroundhiphopenglish">Underground</option>
        <option value="rapoperahiphopenglish">Rap opera</option>
        <option value="newschoolhiphopenglish">New School</option>
        <option value="anthemshiphopenglish">Rap Anthems</option>
        <option value="allhiphopenglish">Mix</option>
    </select> 

    const jsx_english_metal_selector=

    <select onChange={eventfunction3} style={{display:"none",marginRight:"10px"}} id="englishmetalgenres">
        <option defaultValue>Choose genre</option>
        <option value="heavymetalenglish">Heavy Metal</option>
        <option value="trashmetalenglish">Trash</option>
        <option value="symphonicmetalenglish">Symphonic</option>
        <option value="glammetalenglish">Glam</option>
        <option value="blackmetalenglish">Black</option>
        <option value="deathmetalenglish">Death</option>
        <option value="industrialmetalenglish">Industrial</option>
        <option value="christianmetalenglish">Christian</option>
        <option value="gothicmetalenglish">Gothic</option>
        <option value="doommetalenglish">Doom</option>
        <option value="alternativemetalenglish">Alternative</option>
        <option value="allmetalenglish">Mix</option>
    </select>

    const jsx_english_rnb_selector=
    
    <select onChange={eventfunction3} style={{display:"none",marginRight:"10px"}} id="englishrnbgenres">
        <option defaultValue>Choose genre</option>
        <option value="contemporaryrnbenglish">Contemporary</option>
        <option value="doowoprnbenglish">Doowop</option>
        <option value="funkrnbenglish">Funk</option>
        <option value="soulrnbenglish">Soul</option>
        <option value="neosoulrnbenglish">Neosoul</option>
        <option value="allrnbenglish">Mix</option>
    </select>

    const jsx_english_nostalgy_selector=

    <select onChange={eventfunction3} style={{display:"none",marginRight:"10px"}} id="englishnostalgygenres">
        <option defaultValue>Choose decade</option>
        <option value="60senglish">60s</option>
        <option value="70senglish">70s</option>
        <option value="80senglish">80s</option>
        <option value="90senglish">90s</option>
        <option value="00senglish">00s</option>
        <option value="10senglish">10s</option>
        <option value="allgenretoyearenglish">Mix</option>
    </select>

    const jsx_turkish_rock_selector= 

    <select onChange={eventfunction3} style={{display:"none",marginRight:"10px"}} id="turkishrockgenres">
        <option defaultValue>Choose decade</option>
        <option value="punkrockturkish">Punk</option>
        <option value="anatolianrockturkish">Anatolian</option>
        <option value="hardrockturkish">Hard</option>
        <option value="rockanthemsturkish">Anthems</option>
        <option value="allrockturkish">Mix</option>
    </select>

    const jsx_turkish_nostalgy_selector=

    <select onChange={eventfunction3} style={{display:"none",marginRight:"10px"}} id="turkishnostalgygenres">
        <option defaultValue>Choose decade</option>
        <option value="60sturkish">60s</option>
        <option value="70sturkish">70s</option>
        <option value="80sturkish">80s</option>
        <option value="90sturkish">90s</option>
        <option value="00sturkish">00s</option>
        <option value="10sturkish">10s</option>
        <option value="allgenretoyearturkish">Mix</option>
    </select>

/*****************************************************************************************************************************************/

    function shuffleclick() {
        const iframesdivid=document.getElementById("iframesdivid")
        iframesdivid.style.display="block"
    }


/*********************************************************************************************/

    return (
        <>
            <div className="mainrandomsongcontainer">
                <div className="selectors">
                    {jsx_language_selector}
                    {jsx_english_genre_selector}
                    {jsx_english_rock_selector}
                    {jsx_english_pop_selector}
                    {jsx_english_indie_selector}
                    {jsx_english_hiphop_selector}
                    {jsx_english_metal_selector}
                    {jsx_english_rnb_selector}
                    {jsx_english_nostalgy_selector}
                    {jsx_turkish_genre_selector}
                    {jsx_turkish_rock_selector}
                    {jsx_turkish_nostalgy_selector}
                </div>
                <div className="shuffle">
                        <button onClick={shuffleclick}>SHUFFLE</button>
                    </div>
                <div style={{display:"none"}} id="iframesdivid" className="iframes">
                    <iframe id="mainsongyoutubeiframe" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   
                    <div>
                        <iframe id="mainsongspotifyiframe" src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <iframe id="relatedsongsiframe1" className="relatedsongsiframe" src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <iframe id="relatedsongsiframe2" className="relatedsongsiframe" src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <iframe id="relatedplaylist" className="relatedsongsiframe" src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
                    </div>       
       
                </div>
            </div>
        </>      
    )
}

const mapStateToProps = state =>{
    return {
        songs:state.songs
    }
}

export default connect(mapStateToProps)(MainRandomSong)
