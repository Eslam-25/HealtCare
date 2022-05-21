﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace QaryaHealth.Infrastructure.Migrations
{
    public partial class addlabstatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "user",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "user");
        }
    }
}
