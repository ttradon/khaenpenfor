import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"

export const GET = async (req: NextRequest) => {
    try {
        const couples = await prisma.couples.findMany()
        return NextResponse.json(couples)
    } catch (error) {

    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { person1,person2 } = await req.json()
        await prisma.couples.create({
            data: { person1,person2 }
        })
        return NextResponse.json("ok")
    } catch (error) {

    }
}