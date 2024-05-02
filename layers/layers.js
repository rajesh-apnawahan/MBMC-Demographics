var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MBMCStatsRev1_1 = new ol.format.GeoJSON();
var features_MBMCStatsRev1_1 = format_MBMCStatsRev1_1.readFeatures(json_MBMCStatsRev1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStatsRev1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStatsRev1_1.addFeatures(features_MBMCStatsRev1_1);
var lyr_MBMCStatsRev1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStatsRev1_1, 
                style: style_MBMCStatsRev1_1,
                popuplayertitle: "MBMC Stats Rev1",
                interactive: true,
                title: '<img src="styles/legend/MBMCStatsRev1_1.png" /> MBMC Stats Rev1'
            });
var format_MBMCStops_2 = new ol.format.GeoJSON();
var features_MBMCStops_2 = format_MBMCStops_2.readFeatures(json_MBMCStops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStops_2.addFeatures(features_MBMCStops_2);
var lyr_MBMCStops_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStops_2, 
                style: style_MBMCStops_2,
                popuplayertitle: "MBMC Stops",
                interactive: true,
                title: '<img src="styles/legend/MBMCStops_2.png" /> MBMC Stops'
            });
var format_StopsInsideMBMCcsv_3 = new ol.format.GeoJSON();
var features_StopsInsideMBMCcsv_3 = format_StopsInsideMBMCcsv_3.readFeatures(json_StopsInsideMBMCcsv_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsInsideMBMCcsv_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsInsideMBMCcsv_3.addFeatures(features_StopsInsideMBMCcsv_3);
var lyr_StopsInsideMBMCcsv_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsInsideMBMCcsv_3, 
                style: style_StopsInsideMBMCcsv_3,
                popuplayertitle: "Stops Inside MBMC.csv",
                interactive: true,
                title: 'Stops Inside MBMC.csv'
            });
var format_Temples_4 = new ol.format.GeoJSON();
var features_Temples_4 = format_Temples_4.readFeatures(json_Temples_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temples_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temples_4.addFeatures(features_Temples_4);
var lyr_Temples_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temples_4, 
                style: style_Temples_4,
                popuplayertitle: "Temples",
                interactive: true,
                title: '<img src="styles/legend/Temples_4.png" /> Temples'
            });
var format_Signals_5 = new ol.format.GeoJSON();
var features_Signals_5 = format_Signals_5.readFeatures(json_Signals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signals_5.addFeatures(features_Signals_5);
var lyr_Signals_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signals_5, 
                style: style_Signals_5,
                popuplayertitle: "Signals",
                interactive: true,
                title: '<img src="styles/legend/Signals_5.png" /> Signals'
            });
var format_Hospitals_6 = new ol.format.GeoJSON();
var features_Hospitals_6 = format_Hospitals_6.readFeatures(json_Hospitals_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_6.addFeatures(features_Hospitals_6);
var lyr_Hospitals_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitals_6, 
                style: style_Hospitals_6,
                popuplayertitle: "Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Hospitals_6.png" /> Hospitals'
            });
var format_PSU_7 = new ol.format.GeoJSON();
var features_PSU_7 = format_PSU_7.readFeatures(json_PSU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSU_7.addFeatures(features_PSU_7);
var lyr_PSU_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSU_7, 
                style: style_PSU_7,
                popuplayertitle: "PSU",
                interactive: true,
                title: '<img src="styles/legend/PSU_7.png" /> PSU'
            });
var format_PrivateOffices_8 = new ol.format.GeoJSON();
var features_PrivateOffices_8 = format_PrivateOffices_8.readFeatures(json_PrivateOffices_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffices_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffices_8.addFeatures(features_PrivateOffices_8);
var lyr_PrivateOffices_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateOffices_8, 
                style: style_PrivateOffices_8,
                popuplayertitle: "Private Offices",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffices_8.png" /> Private Offices'
            });
var format_Education_9 = new ol.format.GeoJSON();
var features_Education_9 = format_Education_9.readFeatures(json_Education_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_9.addFeatures(features_Education_9);
var lyr_Education_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_9, 
                style: style_Education_9,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_9.png" /> Education'
            });
var format_GovtOffice_10 = new ol.format.GeoJSON();
var features_GovtOffice_10 = format_GovtOffice_10.readFeatures(json_GovtOffice_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovtOffice_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovtOffice_10.addFeatures(features_GovtOffice_10);
var lyr_GovtOffice_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GovtOffice_10, 
                style: style_GovtOffice_10,
                popuplayertitle: "Govt Office",
                interactive: true,
                title: '<img src="styles/legend/GovtOffice_10.png" /> Govt Office'
            });
var format_RailwayStn_11 = new ol.format.GeoJSON();
var features_RailwayStn_11 = format_RailwayStn_11.readFeatures(json_RailwayStn_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStn_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStn_11.addFeatures(features_RailwayStn_11);
var lyr_RailwayStn_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailwayStn_11, 
                style: style_RailwayStn_11,
                popuplayertitle: "Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/RailwayStn_11.png" /> Railway Stn'
            });
var format_StopPopWithinMBMC_12 = new ol.format.GeoJSON();
var features_StopPopWithinMBMC_12 = format_StopPopWithinMBMC_12.readFeatures(json_StopPopWithinMBMC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopWithinMBMC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopWithinMBMC_12.addFeatures(features_StopPopWithinMBMC_12);
var lyr_StopPopWithinMBMC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPopWithinMBMC_12, 
                style: style_StopPopWithinMBMC_12,
                popuplayertitle: "Stop Pop Within MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopPopWithinMBMC_12.png" /> Stop Pop Within MBMC'
            });
var format_MBMCStopPopDissolved_13 = new ol.format.GeoJSON();
var features_MBMCStopPopDissolved_13 = format_MBMCStopPopDissolved_13.readFeatures(json_MBMCStopPopDissolved_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopPopDissolved_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopPopDissolved_13.addFeatures(features_MBMCStopPopDissolved_13);
var lyr_MBMCStopPopDissolved_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStopPopDissolved_13, 
                style: style_MBMCStopPopDissolved_13,
                popuplayertitle: "MBMC Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/MBMCStopPopDissolved_13.png" /> MBMC Stop Pop Dissolved'
            });
var format_StopsinsideMBMC_14 = new ol.format.GeoJSON();
var features_StopsinsideMBMC_14 = format_StopsinsideMBMC_14.readFeatures(json_StopsinsideMBMC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideMBMC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideMBMC_14.addFeatures(features_StopsinsideMBMC_14);
var lyr_StopsinsideMBMC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsideMBMC_14, 
                style: style_StopsinsideMBMC_14,
                popuplayertitle: "Stops inside MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideMBMC_14.png" /> Stops inside MBMC'
            });
var format_PopulationMBMC_15 = new ol.format.GeoJSON();
var features_PopulationMBMC_15 = format_PopulationMBMC_15.readFeatures(json_PopulationMBMC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationMBMC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationMBMC_15.addFeatures(features_PopulationMBMC_15);
var lyr_PopulationMBMC_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationMBMC_15, 
                style: style_PopulationMBMC_15,
                popuplayertitle: "Population MBMC",
                interactive: true,
    title: 'Population MBMC<br />\
    <img src="styles/legend/PopulationMBMC_15_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/PopulationMBMC_15_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/PopulationMBMC_15_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/PopulationMBMC_15_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/PopulationMBMC_15_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/PopulationMBMC_15_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/PopulationMBMC_15_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/PopulationMBMC_15_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/PopulationMBMC_15_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/PopulationMBMC_15_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/PopulationMBMC_15_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/PopulationMBMC_15_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/PopulationMBMC_15_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/PopulationMBMC_15_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/PopulationMBMC_15_14.png" /> 28955 - 31023<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MBMCStatsRev1_1.setVisible(true);lyr_MBMCStops_2.setVisible(true);lyr_StopsInsideMBMCcsv_3.setVisible(true);lyr_Temples_4.setVisible(true);lyr_Signals_5.setVisible(true);lyr_Hospitals_6.setVisible(true);lyr_PSU_7.setVisible(true);lyr_PrivateOffices_8.setVisible(true);lyr_Education_9.setVisible(true);lyr_GovtOffice_10.setVisible(true);lyr_RailwayStn_11.setVisible(true);lyr_StopPopWithinMBMC_12.setVisible(true);lyr_MBMCStopPopDissolved_13.setVisible(true);lyr_StopsinsideMBMC_14.setVisible(true);lyr_PopulationMBMC_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MBMCStatsRev1_1,lyr_MBMCStops_2,lyr_StopsInsideMBMCcsv_3,lyr_Temples_4,lyr_Signals_5,lyr_Hospitals_6,lyr_PSU_7,lyr_PrivateOffices_8,lyr_Education_9,lyr_GovtOffice_10,lyr_RailwayStn_11,lyr_StopPopWithinMBMC_12,lyr_MBMCStopPopDissolved_13,lyr_StopsinsideMBMC_14,lyr_PopulationMBMC_15];
lyr_MBMCStatsRev1_1.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCStops_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_StopsInsideMBMCcsv_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area_KM': 'Area_KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop_Km2': 'Pop_Km2', });
lyr_Temples_4.set('fieldAliases', {'religion': 'religion', 'amenity': 'amenity', 'name': 'name', });
lyr_Signals_5.set('fieldAliases', {'highway': 'highway', });
lyr_Hospitals_6.set('fieldAliases', {'amenity': 'amenity', 'addr_full': 'addr_full', 'name': 'name', });
lyr_PSU_7.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_PrivateOffices_8.set('fieldAliases', {'office': 'office', 'name': 'name', });
lyr_Education_9.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_GovtOffice_10.set('fieldAliases', {'addr_state': 'addr_state', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'descriptio': 'descriptio', 'name_en': 'name_en', 'amenity': 'amenity', 'name_hi': 'name_hi', 'addr_house': 'addr_house', 'layer': 'layer', });
lyr_RailwayStn_11.set('fieldAliases', {'network': 'network', 'name': 'name', });
lyr_StopPopWithinMBMC_12.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_MBMCStopPopDissolved_13.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'City Pop': 'City Pop', 'Coverage': 'Coverage', });
lyr_StopsinsideMBMC_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_PopulationMBMC_15.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCStatsRev1_1.set('fieldImages', {'shapeName': '', 'Area KM': '', 'Perimeter': '', 'Pop': '', 'Pop/Km2': '', });
lyr_MBMCStops_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_StopsInsideMBMCcsv_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', 'Sr__No_': '', 'Depot_Name': '', 'center_lat': '', 'center_lon': '', 'shapeName': '', 'Area_KM': '', 'Perimeter': '', 'Pop': '', 'Pop_Km2': '', });
lyr_Temples_4.set('fieldImages', {'religion': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Signals_5.set('fieldImages', {'highway': 'TextEdit', });
lyr_Hospitals_6.set('fieldImages', {'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'name': 'TextEdit', });
lyr_PSU_7.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffices_8.set('fieldImages', {'office': 'TextEdit', 'name': 'TextEdit', });
lyr_Education_9.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_GovtOffice_10.set('fieldImages', {'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'descriptio': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'name_hi': 'TextEdit', 'addr_house': 'TextEdit', 'layer': 'TextEdit', });
lyr_RailwayStn_11.set('fieldImages', {'network': 'TextEdit', 'name': 'TextEdit', });
lyr_StopPopWithinMBMC_12.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_MBMCStopPopDissolved_13.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'City Pop': 'Range', 'Coverage': 'Range', });
lyr_StopsinsideMBMC_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_PopulationMBMC_15.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_MBMCStatsRev1_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_MBMCStops_2.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Sr__No_': 'hidden field', 'Depot_Name': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_StopsInsideMBMCcsv_3.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'Sr__No_': 'no label', 'Depot_Name': 'no label', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area_KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop_Km2': 'inline label - always visible', });
lyr_Temples_4.set('fieldLabels', {'religion': 'inline label - always visible', 'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Signals_5.set('fieldLabels', {'highway': 'header label - visible with data', });
lyr_Hospitals_6.set('fieldLabels', {'amenity': 'inline label - always visible', 'addr_full': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PSU_7.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PrivateOffices_8.set('fieldLabels', {'office': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Education_9.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_GovtOffice_10.set('fieldLabels', {'addr_state': 'inline label - always visible', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'descriptio': 'hidden field', 'name_en': 'hidden field', 'amenity': 'hidden field', 'name_hi': 'hidden field', 'addr_house': 'hidden field', 'layer': 'header label - visible with data', });
lyr_RailwayStn_11.set('fieldLabels', {'network': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_StopPopWithinMBMC_12.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_MBMCStopPopDissolved_13.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'inline label - always visible', 'City Pop': 'inline label - always visible', 'Coverage': 'header label - visible with data', });
lyr_StopsinsideMBMC_14.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_PopulationMBMC_15.set('fieldLabels', {'fid': 'no label', 'h3': 'no label', 'population': 'header label - visible with data', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_PopulationMBMC_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});