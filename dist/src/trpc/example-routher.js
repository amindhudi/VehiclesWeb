"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleRouter = void 0;
var get_payload_1 = require("../get-payload");
var trpc_1 = require("./trpc");
var zod_1 = require("zod");
exports.exampleRouter = (0, trpc_1.router)({
    // example:publicProcedure.query({
    //     input: z.object({
    //       cursor: z.string().nullish(),
    //       limit: z.number().min(1).max(100).default(10),
    //     }),
    //     async resolve({ input }) {
    //       const { cursor, limit } = input;
    //       const items = await prisma.example.findMany({
    //         take: limit + 1, // Fetch one more than the limit to check if there are more items
    //         cursor: cursor ? { id: cursor } : undefined,
    //         skip: cursor ? 1 : 0, // Skip the cursor item itself
    //         orderBy: { id: 'asc' },
    //       });
    //       let nextCursor: string | null = null;
    //       if (items.length > limit) {
    //         const nextItem = items.pop();
    //         nextCursor = nextItem.id;
    //       }
    //       return {
    //         items,
    //         nextCursor,
    //       };
    //     },
    //   })
    test: trpc_1.publicProcedure.input(zod_1.z.object({
        cursor: zod_1.z.string().nullish(),
        limit: zod_1.z.number().min(1).max(100).default(10),
    })).query(function (_a) {
        var input = _a.input;
        return __awaiter(void 0, void 0, void 0, function () {
            var cursor, limit, payload, vehicles, items, query, options, nextCursor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cursor = input.cursor, limit = input.limit;
                        //   const items = await prisma.example.findMany({
                        //     take: limit + 1, // Fetch one more than the limit to check if there are more items
                        //     cursor: cursor ? { id: cursor } : undefined,
                        //     skip: cursor ? 1 : 0, // Skip the cursor item itself
                        //     orderBy: { id: 'asc' },
                        //   });
                        debugger;
                        return [4 /*yield*/, (0, get_payload_1.getPayloadClient)()];
                    case 1:
                        payload = _b.sent();
                        return [4 /*yield*/, payload.db];
                    case 2:
                        vehicles = _b.sent();
                        console.log(vehicles);
                        items = payload.find({ collection: 'vehicles' });
                        query = cursor ? { _id: { $gt: cursor } } : {};
                        options = {
                            limit: limit + 1, // Fetch one more than the limit to check if there are more items
                            sort: { _id: 1 } // Order by _id ascending
                        };
                        nextCursor = null;
                        //   if (items.length > limit) {
                        //     const nextItem = items.pop();
                        //     nextCursor = nextItem.id;
                        //   }
                        return [2 /*return*/, {
                                items: items,
                                nextCursor: nextCursor,
                            }];
                }
            });
        });
    })
});
