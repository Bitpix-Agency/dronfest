<?php namespace BitpixLimited\Dronfest\Models;

use Model;

/**
 * Model
 */
class Artist extends Model
{
    use \October\Rain\Database\Traits\Validation;

    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'bitpixlimited_dronfest_artists';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [

        'image' => 'System\Models\File',

    ];

    public $jsonable = [

        'socials'

    ];


}
