"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_media_server_1 = __importDefault(require("node-media-server"));
const nms = new node_media_server_1.default({
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
    },
    http: {
        port: 8000,
        mediaroot: './media',
        allow_origin: '*',
    },
    trans: {
        ffmpeg: 'C:\\Program Files\\ffmpeg\\bin\\ffmpeg.exe',
        tasks: [
            {
                app: 'live',
                vc: 'copy',
                ac: 'copy',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
            },
            {
                app: 'live',
                mp4: true,
                mp4Flags: '[movflags=frag_keyframe+empty_moov]',
            },
        ],
    },
    fission: {
        ffmpeg: 'C:\\Program Files\\ffmpeg\\bin\\ffmpeg.exe',
        tasks: [
            {
                rule: 'live/*',
                model: [
                    {
                        ab: '128k',
                        vb: '1500k',
                        vs: '1280x720',
                        vf: '30',
                    },
                    {
                        ab: '96k',
                        vb: '1000k',
                        vs: '854x480',
                        vf: '24',
                    },
                    {
                        ab: '96k',
                        vb: '600k',
                        vs: '640x360',
                        vf: '20',
                    },
                ],
            },
        ],
    },
});
nms.run();
